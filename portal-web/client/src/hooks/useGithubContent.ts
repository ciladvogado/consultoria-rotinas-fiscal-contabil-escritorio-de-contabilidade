import { useState, useEffect } from "react";

const REPO_BASE =
  "https://raw.githubusercontent.com/ciladvogado/consultoria-rotinas-fiscal-contabil-escritorio-de-contabilidade/master";

export function useGithubContent(path: string) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${REPO_BASE}/${path}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Erro ao carregar: ${res.status}`);
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [path]);

  return { content, loading, error };
}

export function useGithubMultiple(paths: string[]) {
  const [contents, setContents] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all(
      paths.map((p) =>
        fetch(`${REPO_BASE}/${p}`)
          .then((res) => (res.ok ? res.text() : ""))
          .then((text) => [p, text] as [string, string])
      )
    ).then((results) => {
      const map: Record<string, string> = {};
      results.forEach(([p, text]) => {
        map[p] = text;
      });
      setContents(map);
      setLoading(false);
    });
  }, [paths.join(",")]);

  return { contents, loading };
}

export { REPO_BASE };
