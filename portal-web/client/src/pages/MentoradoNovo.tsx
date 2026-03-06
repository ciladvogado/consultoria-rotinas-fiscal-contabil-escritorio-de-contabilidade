import Layout from "@/components/Layout";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { useLocation } from "wouter";
import { ArrowLeft, Loader2, LogIn, Save, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { toast } from "sonner";

export default function MentoradoNovo() {
  const { user, loading: authLoading } = useAuth();
  const [, navigate] = useLocation();

  const createMutation = trpc.mentorado.create.useMutation({
    onSuccess: (data) => {
      toast.success("Mentorado criado com sucesso!");
      navigate(`/mentorados/${data.id}`);
    },
    onError: (err) => {
      toast.error(err.message || "Erro ao criar mentorado.");
    },
  });

  const [form, setForm] = useState({
    nome: "",
    cnpj: "",
    tipo: "empresa" as "empresa" | "escritorio",
    regimeTributario: "simples_nacional" as "mei" | "simples_nacional" | "lucro_presumido" | "lucro_real",
    porte: "micro" as "mei" | "micro" | "pequena" | "media" | "grande",
    segmento: "",
    municipio: "",
    uf: "",
    contatoNome: "",
    contatoEmail: "",
    contatoTelefone: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim()) {
      toast.error("Nome é obrigatório.");
      return;
    }
    createMutation.mutate({
      nome: form.nome,
      cnpj: form.cnpj || undefined,
      tipo: form.tipo,
      regimeTributario: form.regimeTributario,
      porte: form.porte,
      segmento: form.segmento || undefined,
      municipio: form.municipio || undefined,
      uf: form.uf || undefined,
      observacoes: [form.contatoNome, form.contatoEmail, form.contatoTelefone].filter(Boolean).length > 0
        ? `Contato: ${form.contatoNome} | ${form.contatoEmail} | ${form.contatoTelefone}`.trim()
        : undefined,
    });
  };

  if (authLoading) {
    return (
      <Layout>
        <div className="container py-16 flex justify-center">
          <Loader2 className="animate-spin text-muted-foreground" size={32} />
        </div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <div className="max-w-md mx-auto">
            <Users className="mx-auto mb-4 text-muted-foreground" size={48} />
            <h2 className="font-serif text-2xl mb-2">Acesso Restrito</h2>
            <p className="text-muted-foreground mb-6">Faça login para cadastrar mentorados.</p>
            <a href={getLoginUrl()}>
              <Button className="bg-[#0f766e] hover:bg-[#0f766e]/90 text-white">
                <LogIn size={16} className="mr-2" />
                Fazer Login
              </Button>
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  if (user.role !== "admin") {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <p className="text-muted-foreground">Apenas o mentor pode cadastrar mentorados.</p>
          <Link href="/mentorados">
            <Button variant="outline" className="mt-4">
              <ArrowLeft size={16} className="mr-2" />
              Voltar
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-10 max-w-2xl">
        <Link
          href="/mentorados"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#0f766e] transition-colors no-underline mb-6"
        >
          <ArrowLeft size={14} />
          Voltar aos Mentorados
        </Link>

        <h1 className="font-serif text-3xl text-foreground mb-8">Novo Mentorado</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dados Básicos */}
          <div className="border border-border rounded-sm bg-card p-6">
            <h2 className="font-serif text-lg text-foreground mb-4">Dados Básicos</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Nome da Empresa / Escritório *
                </label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => handleChange("nome", e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
                  placeholder="Ex: Contabilidade ABC Ltda"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">CNPJ</label>
                  <input
                    type="text"
                    value={form.cnpj}
                    onChange={(e) => handleChange("cnpj", e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
                    placeholder="00.000.000/0000-00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Tipo</label>
                  <select
                    value={form.tipo}
                    onChange={(e) => handleChange("tipo", e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
                  >
                    <option value="empresa">Empresa</option>
                    <option value="escritorio">Escritório de Contabilidade</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Regime Tributário
                  </label>
                  <select
                    value={form.regimeTributario}
                    onChange={(e) => handleChange("regimeTributario", e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
                  >
                    <option value="mei">MEI</option>
                    <option value="simples_nacional">Simples Nacional</option>
                    <option value="lucro_presumido">Lucro Presumido</option>
                    <option value="lucro_real">Lucro Real</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Porte</label>
                  <select
                    value={form.porte}
                    onChange={(e) => handleChange("porte", e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
                  >
                    <option value="mei">MEI</option>
                    <option value="micro">Microempresa</option>
                    <option value="pequena">Pequena Empresa</option>
                    <option value="media">Média Empresa</option>
                    <option value="grande">Grande Empresa</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Segmento</label>
                <input
                  type="text"
                  value={form.segmento}
                  onChange={(e) => handleChange("segmento", e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
                  placeholder="Ex: Comércio, Indústria, Serviços, Agro"
                />
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="border border-border rounded-sm bg-card p-6">
            <h2 className="font-serif text-lg text-foreground mb-4">Localização</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Município</label>
                <input
                  type="text"
                  value={form.municipio}
                  onChange={(e) => handleChange("municipio", e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
                  placeholder="Ex: Goiânia"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">UF</label>
                <input
                  type="text"
                  value={form.uf}
                  onChange={(e) => handleChange("uf", e.target.value.toUpperCase().slice(0, 2))}
                  className="w-full px-3 py-2.5 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
                  placeholder="GO"
                  maxLength={2}
                />
              </div>
            </div>
          </div>

          {/* Contato */}
          <div className="border border-border rounded-sm bg-card p-6">
            <h2 className="font-serif text-lg text-foreground mb-4">Contato Principal</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Nome</label>
                <input
                  type="text"
                  value={form.contatoNome}
                  onChange={(e) => handleChange("contatoNome", e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
                  placeholder="Nome do responsável"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">E-mail</label>
                  <input
                    type="email"
                    value={form.contatoEmail}
                    onChange={(e) => handleChange("contatoEmail", e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
                    placeholder="email@empresa.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Telefone</label>
                  <input
                    type="text"
                    value={form.contatoTelefone}
                    onChange={(e) => handleChange("contatoTelefone", e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
                    placeholder="(62) 99999-9999"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Botão */}
          <div className="flex justify-end gap-3">
            <Link href="/mentorados">
              <Button variant="outline" type="button">
                Cancelar
              </Button>
            </Link>
            <Button
              type="submit"
              className="bg-[#0f766e] hover:bg-[#0f766e]/90 text-white"
              disabled={createMutation.isPending}
            >
              {createMutation.isPending ? (
                <Loader2 size={16} className="animate-spin mr-2" />
              ) : (
                <Save size={16} className="mr-2" />
              )}
              Cadastrar Mentorado
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
