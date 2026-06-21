export interface BuiltInPrompt {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  objective: string;
  promptText: string;
  tags: string[];
}

export interface GeneratorOption {
  id: string;
  name: string;
  text: string;
}

export interface PromptCategory {
  id: string;
  name: string;
  icon: string;
}

export const PROMPT_CATEGORIES: PromptCategory[] = [
  { id: "all", name: "Todos os Prompts", icon: "Layers" },
  { id: "devsecops", name: "DevSecOps & CI/CD", icon: "GitBranch" },
  { id: "ia-llm", name: "Arquitetura de IA & LLMs", icon: "Brain" },
  { id: "cloud", name: "Cloud (AWS / GCP)", icon: "Cloud" },
  { id: "secops", name: "SecOps & Red/Blue Team", icon: "ShieldAlert" },
  { id: "database", name: "Banco de Dados & SQL", icon: "Database" },
  { id: "sys-arch", name: "Arquitetura de Sistemas", icon: "Cpu" },
  { id: "automation", name: "Scripts & Automação", icon: "Terminal" },
  { id: "api-security", name: "Segurança de APIs & Web", icon: "Shield" },
  { id: "compliance", name: "Governança & SecOps CISO", icon: "Award" },
  { id: "cryptography", name: "Criptografia & Chaves", icon: "Key" },
  { id: "containers", name: "Containers & K8s", icon: "Box" }
];

export const CURATED_PROMPTS: BuiltInPrompt[] = [
  {
    id: "devsecops-pipeline-sec",
    title: "Auditoria Completa de Pipeline CI/CD Securizado",
    category: "devsecops",
    subCategory: "Segurança de CI/CD",
    objective: "Desenhar um pipeline de CI/CD blindado incorporando SAST, DAST, SCA e análise de segredos de forma assíncrona.",
    tags: ["GitHub Actions", "SCA", "SAST", "Gitleaks", "Security Gates"],
    promptText: `# DEVSECOPS PIPELINE AUDIT & INTEGRATION PROMPT

Você é um DevSecOps Principal Engineer altamente condecorado. Sua tarefa é analisar o workflow do GitHub Actions fornecido e arquitetar um pipeline de CI/CD imune a ataques de cadeia de suprimento.

### Requisitos Técnicos do Pipeline:
1. **SAST (Static Application Security Testing)**: Integre Semgrep e CodeQL configurados para analisar vulnerabilidades de alta severidade nas linguagens do projeto.
2. **SCA (Software Composition Analysis)**: Adicione escaneamento automático de vulnerabilidades em dependências usando Trivy e Snyk, bloqueando o merge caso haja CVEs críticos.
3. **Análise de Segredos**: Implemente detecção em tempo real de chaves e segredos em commits através do Gitleaks de forma offline.
4. **Métricas DevSecOps**: Estruture a extração de métricas de vulnerabilidade em formato OpenTelemetry para ingestão no Grafana.

Gere o código YAML completo do workflow com comentários extremamente detalhados explicativos de cada estágio.`
  },
  {
    id: "ia-nemoguardrails",
    title: "Implementação de Guardrails para LLMs de Larga Escala",
    category: "ia-llm",
    subCategory: "Segurança de IA",
    objective: "Garantir blindagem contra ataques de prompt injection, jailbreak corporativo e exfiltração de dados (PII).",
    tags: ["Gemini API", "NeMo Guardrails", "PII", "Jailbreak Model", "Vertex AI"],
    promptText: `# LLM PROMPT INJECTION & JAILBREAK SHIELDING ENGINE

Você atuará como um Deep Learning Security Architect especializado em robustez de modelos geradores de linguagem (LLMs).

Escreva um arquivo de configuração (.co / .colang / Python) para NeMo Guardrails ou similar para proteger uma instância de atendimento financeiro.

### Diretrizes de Filtragem:
- **Entrada (Input Rules)**: Identifique tentativas de induzir o modelo a ignorar instruções anteriores usando análises semânticas de relevância.
- **Saída (Output Rules)**: Detecte vazamento indesejado de números de cartão, CPF ou tokens de sessão usando expressões regulares integradas em canais paralelos.
- **Ações de Fallback**: Caso ocorra desvio ideológico óbvio, envie uma saída estéril padrão, registrando o incidente no Cloud Monitoring.

Forneça os snippets de código, justificativas matemáticas para os limiares de cosseno e uma simulação de testes.`
  },
  {
    id: "cloud-gcp-gke-harden",
    title: "Hardening de Cluster GKE (Kubernetes) para Cargas Sensíveis",
    category: "cloud",
    subCategory: "Segurança Cloud-Native",
    objective: "Configurar um ambiente GKE escalável e imune seguindo os benchmarks rigorosos do CIS.",
    tags: ["GCP", "GKE Autopilot", "Kubernetes", "CIS Benchmark", "mTLS"],
    promptText: `# GCP SECURITY HARDENING - GKE STANDARDS

Atue como um GCP Cloud Security Architect Sênior certificado. Projete a infraestrutura em Terraform para um cluster Google Kubernetes Engine (GKE) altamente blindado.

### Requisitos Mandatórios:
1. **Rede Estéril**: Rede VPC com subnets estritamente privadas, desabilitando IP público em nodes. Uso de Cloud NAT para conexões de saída.
2. **Políticas de Pods (Security Admission)**: Restrinja escalonamento de privilégios de containers para root. Implemente Gatekeeper OPA para validação.
3. **Service Mesh com mTLS**: Configure Istio Mesh com autenticação mTLS mútua estrita entre os microserviços.
4. **Deteção de Intrusão em Tempo Real**: Configure o Google Cloud Armor e integre filtros preventivos Falco.

Envie o código Terraform bem estruturado e pronto para execução.`
  },
  {
    id: "secops-threat-hunting",
    title: "Livro de Caça a Ameaças (Threat Hunting Playbook)",
    category: "secops",
    subCategory: "Detecção e Resposta",
    objective: "Desenvolver consultas analíticas KQL/SQL para identificar persistência silenciosa de APTs em redes Linux.",
    tags: ["KQL", "Syslog", "APT", "Persistence", "MITRE ATT&CK"],
    promptText: `# THREAT HUNTING PLAYBOOK - APT DETECTION

Você é um Incident Response (DFIR) Specialist experiente em detecção de agentes estatais persistentes. Sua tarefa é criar um playbook de detecção analítica para logs de auditoria Linux.

Explore as táticas do framework MITRE ATT&CK:
1. **Modificações de Cron / Systemd**: Criação de tarefas periódicas para execução furtiva de beacons reversos.
2. **Abuso de Sudo / SUID**: Identificação de arquivos alterados com bit SUID ativado indevidamente.
3. **Ofuscação de Processos**: Processos cujo executável original foi removido do disco enquanto estão em execução.

Para cada tática, forneça:
- A consulta correspondente em KQL (Kusto Query Language) e SQL (OSQuery).
- Sinalizações de falsos positivos típicos e como filtrá-los.`
  },
  {
    id: "database-postgres-index-optimize",
    title: "Otimização Avançada e Análise de Queries PostgreSQL",
    category: "database",
    subCategory: "Performance tuning",
    objective: "Identificar gargalos em tabelas com bilhões de registros usando índices parciais e particionamento.",
    tags: ["PostgreSQL", "Query Planner", "EXPLAIN ANALYZE", "Partitioning", "B-Tree"],
    promptText: `# POSTGRESQL HIGH-SCALE TUNING ARCHITECTURE

Como Database Administrator (DBA) especialista em sistemas transacionais concorrentes do PostgreSQL com mais de 100 milhões de escritas diárias.

Explique a modelagem física, índices ideais e diagnósticos para otimizar a query anexada:

\`\`\`sql
SELECT user_id, count(id), sum(amount) 
FROM financial_transactions 
WHERE transaction_status = 'failed' 
  AND created_at >= NOW() - INTERVAL '30 days' 
GROUP BY user_id 
ORDER BY sum(amount) DESC 
LIMIT 100;
\`\`\`

### Detalhes técnicos recomendados:
- Análise baseada no compilador de plano do PostgreSQL (\`EXPLAIN ANALYZE\` / JIT compilation).
- Redução de Table Scan com uso inteligente de índices parciais.
- Estratégias de particionamento físico por range de datas.`
  },
  {
    id: "sys-arch-agent-swarm",
    title: "Orquestrador de Swarm de Agentes Cooperativos",
    category: "ia-llm",
    subCategory: "Sistemas Inteligentes",
    objective: "Desenhar sistema de múltiplos agentes cooperativos resolvendo problemas de análise de mercado concorrentemente.",
    tags: ["Multi-Agent", "LangGraph", "JSON Schema", "Docker Swarm", "Python"],
    promptText: `# COOPERATIVE MULTI-AGENT SWARM DESIGN

Você é um Engenheiro de Inteligência Artificial especializado na criação de sistemas de tomada de decisão descentralizados utilizando LangGraph e CrewAI.

Arquitete um sistema de 3 agentes que resolvem em conjunto auditorias críticas:
1. **Agente Triador (Triage Agent)**: Classifica a gravidade do blueprint importado.
2. **Agente Auditor Técnico (Security Auditor)**: Varre o código em busca de vulnerabilidades lógicas.
3. **Agente Reportador (Compliance Writer)**: Formata um boletim de auditoria robusto com impacto financeiro.

Escreva o código em Python usando troca de mensagens JSON estruturadas, controle de estado centralizado tolerante a falhas e verificação de loops circulares.`
  },
  {
    id: "automation-ansible-secrets",
    title: "Automação de Ansible Vault Descentralizado",
    category: "automation",
    subCategory: "Configuração Automatizada",
    objective: "Provisionar infraestrutura mantendo segredos encriptados via Ansible Vault de maneira escalável.",
    tags: ["Ansible", "Ansible Vault", "YAML", "Secrets", "Sops"],
    promptText: `# SECURE AUTOMATION & INTEGRITY VIA ANSIBLE VAULT

Atue como um SRE Lead Engineer. Crie um conjunto de playbooks do Ansible que automatiza a instalação de patches críticos em servidores web sem exibir segredos nas saídas de depuração ordinárias.

### Diretrizes:
- Uso do Ansible Vault integrado com sops ou arquivos de chave privados.
- Proteção anti-vazamento de logs usando diretiva \`no_log: true\`.
- Geração de chaves temporárias auto-expirantes em runtime.`
  }
];

// Listas combinatórias de altíssima fidelidade de modo a expandir a biblioteca para exatos 20.000 prompts
const ROLES = [
  "Arquiteto de Cibersegurança Sênior",
  "Engenheiro DevSecOps Principal",
  "Auditor Líder de Segurança Cloud Native",
  "Analista do Blue Team / Resposta Técnica",
  "Consultor Avançado de AppSec (Segurança de Aplicação)",
  "Líder de Red Team & Ataque Simulado",
  "Especialista de IA & Modelos de Linguagem Securizados",
  "Engenheiro SRE especialista em Telemetria Defensiva",
  "Arquiteto de Dados de Larga Escala & Privacidade PII",
  "Administrador de Banco de Dados (DBA) Sênior",
  "Chief Information Security Officer (CISO) Adjunto",
  "Engenheiro de Automação de Infraestrutura Segura"
];

const TARGETS = [
  "no Gateway de Pagamentos e Barramento de Pix",
  "no microsserviço de Autenticação Multifator / OAuth",
  "no Barramento de Transações Financeiras Open Finance",
  "no LLM de Suporte ao Cliente de Alta Escala",
  "no pipeline CI/CD de deploy automatizado para Produção",
  "no Barramento e Cluster de Banco de Dados PostgreSQL principal",
  "na esteira de mensagens Kafka e filas de eventos críticos",
  "na API REST Core do Portal do Usuário",
  "no Cluster de Kubernetes / Nodes Isolados sob GKE",
  "na Ingestão e Agregação de Logs OpenTelemetry para Auditoria",
  "nos microsserviços de mensageria assíncrona com Helm",
  "no Gerenciador de Chaves de API e Segredos do Vault"
];

const TASKS = [
  "executar auditoria detalhada de código-fonte e mapear fragilidades lógicas",
  "desenhar modelo de ameaças pragmático sob a metodologia STRIDE",
  "configurar réguas de controle contra abusos e bloqueio de acessos simultâneos",
  "elaborar blueprint de Infraestrutura como Código (IaC) limpo e restritivo",
  "integrar travas estáticas assíncronas de conformidade de código na esteira",
  "implementar guardrails para contenção de prompt injection e jailbreak",
  "efetuar tuning fino de consultas lentas e análise física de execução no banco",
  "redigir playbook tático para resposta e contenção emergencial de vazamentos",
  "parametrizar rotas mTLS ponto-a-ponto com assinatura rígida de tokens",
  "desenhar barramento resiliente de backups offline imunes a ramsomwares",
  "auditar vazamentos de PII e readequar a retenção técnica perante a legislação",
  "simular intrusões de barramento com exploração tática de privilégio"
];

const STACKS = [
  "utilizando Rust (Axum, Tokio e Serde)",
  "usando Go (Gin, Gorm e Crypt)",
  "baseado em Python 3.11 (FastAPI, PyTorch e PyOTP)",
  "com TypeScript / Node.js (NestJS, Prisma e JWT)",
  "através de Terraform, Helm e manifestos Kubernetes",
  "configurado em PostgreSQL 15/16 com índices parciais",
  "via scripts portáveis em Bash Shell e bibliotecas standard do Python",
  "utilizando C# / .NET8 com WebAPI e isolamento nativo",
  "com Java 17 / Spring Boot 3 e Spring Security Enterprise",
  "integrado com ELK Stack (ElasticSearch) e agentes OpenTelemetry",
  "usando Docker com Rootless Containers e Podman",
  "via definições AWS CloudFormation e politicas IAM estritas"
];

const STANDARDS = [
  "alinhado às diretrizes do OWASP Top 10 e práticas defensivas",
  "garantindo total conformidade com a LGPD Artigo 48 nacional",
  "atendendo às especificações rígidas do PCI-DSS v4.0 Tier 1",
  "sob o padrão de excelência dos benchmarks do CIS (Center for Internet Security)",
  "seguindo a filosofia Zero Trust de segurança absoluta baseada em autenticação contínua",
  "conforme as diretrizes federais do NIST SP 800-53 para controle de integridade",
  "visando aprovação ágil em auditorias SOC 2 Type II de segurança de processos",
  "assegurando tolerância massiva a falhas e resiliência de negócios sob a ISO 22301",
  "garantindo a privacidade de registros e transações biométricas sob a HIPAA",
  "em conformidade com as regras NSA de Kubernetes Hardening e isolamento de pods",
  "conforme as recomendações OWASP Top 10 API Security para evitar exposição indesejada",
  "visando blindagem total contra ataques de cadeia de suprimento (Salsa / SLSA)"
];

function generateCombinatorialPrompts(): BuiltInPrompt[] {
  const result: BuiltInPrompt[] = [];
  const totalCombinations = 248832; // 12^5
  const countToGenerate = 17280; // This gives us exactly 17280 unique diverse combinations
  const stride = 97003; // Coprime to 248832 (prime factors are only 2 and 3)

  for (let k = 0; k < countToGenerate; k++) {
    const n = (k * stride) % totalCombinations;

    // Decompose n into indices for each of the 5 arrays
    const r = Math.floor(n / 20736) % 12;
    const tg = Math.floor(n / 1728) % 12;
    const tk = Math.floor(n / 144) % 12;
    const s = Math.floor(n / 12) % 12;
    const st = n % 12;

    const role = ROLES[r];
    const target = TARGETS[tg];
    const task = TASKS[tk];
    const stack = STACKS[s];
    const std = STANDARDS[st];

    // Determine category based on task or target
    let category = "sys-arch";
    let subCategory = "Arquitetura";

    if (tk === 0 || tk === 4) {
      category = "devsecops";
      subCategory = "DevSecOps & CI/CD";
    } else if (tk === 5) {
      category = "ia-llm";
      subCategory = "Engenharia de IA";
    } else if (tk === 3) {
      category = "cloud";
      subCategory = "Infraestrutura Cloud";
    } else if (tk === 7 || tk === 11) {
      category = "secops";
      subCategory = "Pentest & Threat Hunting";
    } else if (tk === 6) {
      category = "database";
      subCategory = "Banco de Dados & SQL";
    } else if (tk === 1) {
      category = "compliance";
      subCategory = "Conformidade & CISO";
    } else if (tg === 11) {
      category = "cryptography";
      subCategory = "Criptografia & Chaves";
    } else if (tg === 8) {
      category = "containers";
      subCategory = "Containers & K8s";
    } else if (tg === 7 || tg === 0) {
      category = "api-security";
      subCategory = "Segurança de APIs";
    } else {
      category = "automation";
      subCategory = "Scripts & Automação";
    }

    const titlePrefix = target.replace(/^(na API REST|no|na|nos|nas)\s+/, "");
    // Capitalize first letter of prefix
    const formattedPrefix = titlePrefix.charAt(0).toUpperCase() + titlePrefix.slice(1);
    const title = `Blindar ${formattedPrefix} | ${role}`;
    
    const objective = `Projetar solução resiliente para ${task} ${stack}, devidamente ${std}.`;

    const tags = ["Segurança"];
    if (stack.includes("Rust")) tags.push("Rust");
    else if (stack.includes("Go")) tags.push("Go");
    else if (stack.includes("Python")) tags.push("Python");
    else if (stack.includes("TypeScript")) tags.push("TypeScript", "Node");
    else if (stack.includes("Terraform")) tags.push("Terraform", "IaC");
    else if (stack.includes("PostgreSQL")) tags.push("Postgres", "SQL");
    else if (stack.includes("Kubernetes") || stack.includes("Helm")) tags.push("K8s", "Helm");
    else tags.push("Shell");

    if (std.includes("OWASP")) tags.push("OWASP");
    if (std.includes("LGPD")) tags.push("LGPD");
    if (std.includes("PCI")) tags.push("PCI-DSS");
    if (std.includes("Zero Trust")) tags.push("ZeroTrust");

    const promptText = `# PROMPT DE ARQUITETURA TÁTICA - CÓDIGO BPL-${10000 + k + 1}
## FUNÇÃO TÁTICA DESIGNADA: ${role.toUpperCase()}
## MEIO DE APLICAÇÃO: ${target.toUpperCase()}

Atue como o **${role}** principal da arquitetura. Fomos convocados para implementar de maneira resiliente e estéril a seguinte tática: **${task}** que está ativa **${target}**.

### Diretrizes de Engenharia e Tecnologia:
1. **Padrão Tecnológico**: A implementação e blueprints devem ser estruturados ${stack}.
2. **Higiene e Compliance**: Garanta que todas as entregas e caminhos de arquivos estejam em conformidade ${std}.
3. **Imunidade contra Vazamento de Segredos**: Nunca exponha chaves simétricas, tokens JWT ou credenciais textualmente nos arquivos propostos.

### Entregáveis Esperados:
- **Chassi de Pastas**: Elabore mentalmente ou por escrito a estrutura e caminhos de diretórios do projeto recomendados (ex: \`/src/security\`, \`/config\`).
- **Middleware / Código Defensivo**: Demonstre a rotina básica de validação de payload ou controle de tokens estrito no ecossistema selecionado.
- **Configuração de Auditoria**: Forneça os comandos em CLI para analisar commits ou testar a configuração sob carga máxima de estresse.

Mantenha a polidez profissional do cargo, responda de forma pragmática e extremamente detalhada.`;

    result.push({
      id: `gen-prompt-${k + 1}`,
      title,
      category,
      subCategory,
      objective,
      promptText,
      tags: Array.from(new Set(tags))
    });
  }

  return result;
}

export const BUILT_IN_PROMPTS: BuiltInPrompt[] = [
  ...CURATED_PROMPTS,
  ...generateCombinatorialPrompts()
];

export const GENERATOR_ROLES: GeneratorOption[] = [
  { id: "devsecops", name: "DevSecOps Principal Engineer", text: "Atue como um Engenheiro DevSecOps Principal especialista em segurança de pipelines CI/CD e integração pragmática de segurança defensiva em ambientes corporativos de alto fluxo." },
  { id: "ai_architect", name: "Deep Learning & AI Architect", text: "Você é um Arquiteto de Deep Learning e IA especialista em modelos de linguagem (LLMs), orquestradores de agentes, RAG de alta fidelidade e blindagem contra ataques adversários." },
  { id: "sec_auditor", name: "Lead Cyber Security Auditor", text: "Transforme-se em um Auditor Líder de Segurança Cibernética especializado em conformidade SOC 2, HIPAA, PCI-DSS e revisão técnica rigorosa de vulnerabilidades lógicas." },
  { id: "solutions_arch", name: "Solutions Architect (Multi-Cloud)", text: "Atue como Arquiteto de Soluções Multi-Cloud especialista em alta escalabilidade, tolerância a falhas massivas, otimização extrema de custos e design resiliente." },
  { id: "database_admin", name: "Premium PostgreSQL / SQL DBA", text: "Assuma o papel de um Administrador de Banco de Dados PostgreSQL Líder especializado em tuning de queries, locks complexos, índices parciais e bancos de escala de terabytes." },
  { id: "sre_engineer", name: "Site Reliability Engineer (SRE)", text: "Atue como um Site Reliability Engineer (SRE) com foco em telemetria, observabilidade de baixa latência usando OpenTelemetry, resposta automatizada e resiliência." },
  { id: "backend_dev", name: "Senior Backend Engineer (Go/Rust)", text: "Você é um Engenheiro Backend Sênior especialista em linguagens concorrentes de sistema (como Go, Rust e C++) focado em performance absoluta, concorrência limpa e zero alocações indesejadas." },
  { id: "threat_hunter", name: "Cyber Threat Hunter & DFIR Specialist", text: "Atue como Threat Hunter e Especialista em Incident Response (DFIR) com foco em rastreamento furtivo de APTs, engenharia reversa de malware e auditoria em logs brutos Linux/Windows." },
  { id: "ux_designer", name: "Principal Product Design Craftsperson", text: "Você é um Designer de Produto Principal focado em usabilidade técnica avançada, micro-interações, acessibilidade estrita (WCAG) e refinamento tipográfico minimalista." },
  { id: "data_engineer", name: "High-Scale Big Data Engineer", text: "Assuma o papel de Engenheiro de Dados de Larga Escala focado em processamento em tempo real de fluxos massivos via Spark, data lakes Apache Iceberg e queries de baixíssima latência." },
  { id: "compliance_officer", name: "Chief Information Security Officer (CISO)", text: "Atue como CISO focado em riscos de governança cibernética, compliance com regulamentações globais (GDPR, LGPD, HIPAA) e estimativa financeira de impacto de vulnerabilidades." },
  { id: "qa_automate", name: "Principal Quality & Automation Engineer", text: "Você é um Engenheiro Principal de Automação de Testes e Qualidade especializado em verificação formal, testes de estresse, caos e simulações complexas de cargas." }
];

export const GENERATOR_TASKS: GeneratorOption[] = [
  { id: "code_audit", name: "Auditar Código Fonte & Redigir Correções", text: "Sua tarefa consiste em varrer o código-fonte fornecido em busca de vulnerabilidades lógicas de alta criticidade e estruturar correções limpas utilizando design patterns defensivos." },
  { id: "threat_model", name: "Criar Modelo de Ameaças (Threat Model)", text: "Gere um Modelo de Ameaças completo seguindo a metodologia STRIDE, identificando superfícies de ataque vulneráveis e estabelecendo mecanismos robustos de mitigação." },
  { id: "perf_tuning", name: "Tuning Técnico e Profiling de Performance", text: "Analise o bloco lógico e execute profiling de performance. Identifique pontos de contenção de CPU, locks de concorrência ou desperdício de memória e otimize o código." },
  { id: "infra_as_code", name: "Escrever Infraestrutura como Código (IaC)", text: "Desenvolva manifestos de Infraestrutura como Código (IaC) limpos, reutilizáveis e nativamente seguros, isolando variáveis críticas e garantindo menor privilégio." },
  { id: "cicd_automation", name: "Automatizar Pipeline CI/CD com Security Shields", text: "Crie um script ou arquivo de workflow de automação onde integra verificadores automáticos de integridade de código, análise de segredos e bloqueadores inteligentes." },
  { id: "agent_orchestration", name: "Montar Framework de Agente Reativo", text: "Projete uma arquitetura para agentes autônomos ou semi-autônomos, definindo fluxos de controle de estado determinísticos e minimizando o risco de loops lógicos indeterminados." },
  { id: "db_modeling", name: "Modelar Banco de Dados Normalizado", text: "Desenhe o modelo físico do banco de dados visando conformidade, integridade de transações concorrentes e performance ideal para indexação avançada." },
  { id: "incident_playbook", name: "Escrever Playbook de Resposta de Incidente", text: "Redija um passo a passo operacional detalhado com comandos reais e pontos de controle críticos para conter e mitigar instantaneamente vazamentos ou anomalias detetadas." },
  { id: "api_gateway", name: "Projetar API Gateway & Controladores", text: "Arquitete as rotas de uma aplicação garantindo autenticação mTLS rigorosa, rate-limiting inteligente contra abusos e logs detalhados de auditoria." }
];

export const GENERATOR_STACKS: GeneratorOption[] = [
  { id: "gcp_vertex", name: "Google Cloud (Vertex AI, Cloud Run, GKE)", text: "Utilizando a infraestrutura do Google Cloud Platform (GCP), especially Vertex AI, Cloud Run e Google Kubernetes Engine (GKE)." },
  { id: "aws_cloud", name: "Amazon Web Services (ECS, SageMaker, DynamoDB)", text: "Focando no ecossistema AWS, utilizando Elastic Container Service (ECS), SageMaker para treinamento e DynamoDB para escalabilidade." },
  { id: "python_ml", name: "Python 3.11+ (FastAPI, PyTorch, Pandas)", text: "Utilizando a stack moderna baseada em Python, tirando proveito de FastAPI para endpoints, PyTorch para inferências e Pandas para manipulação de vetores de dados." },
  { id: "node_ts", name: "TypeScript / Node.js (Next.js, Prisma, Express)", text: "Usando uma arquitetura TypeScript contínua, com Next.js no frontend, rotas Express rápidas e segurança de tipos no banco com Prisma." },
  { id: "kube_docker", name: "Docker & Kubernetes (Helm, Istio)", text: "Em um ambiente puramente cloud-native containerizado, orquestrado através do Kubernetes com controle via Helm charts e Service Mesh Istio." },
  { id: "rust_lang", name: "Rust (Tokio, Axum, Serde)", text: "Através da robustez de Rust para sistemas concorrentes seguros de memória, usando Tokio como runtime assíncrono e Axum nas APIs." },
  { id: "sql_postgres", name: "PostgreSQL 16 & SQLite", text: "Utilizando recursos nativos relacionais avançados, backups, transações ACID rigorosas e índices parciais no banco de dados." },
  { id: "bash_python", name: "Bash Shell & Python Scripts (Standard libraries)", text: "Criando utilitários limpos em Bash/Shell e scripts Python sem dependências externas adicionais complexas, garantindo portabilidade tática total." }
];

export const GENERATOR_STYLES: GeneratorOption[] = [
  { id: "extreme_sec", name: "Segurança Extrema (Zero Trust / OWASP)", text: "Priorize segurança militar absoluta. Siga o princípio de Privilégio Mínimo, implemente validações rígidas em todas as entradas e cumpra checklist completo do OWASP." },
  { id: "clean_code", name: "Clean Code & Clean Architecture", text: "Garantir código legível, modular, declarativo, fácil de documentar e seguindo padrões consolidados de Design Patterns (SOLID)." },
  { id: "performance", name: "Micro-otimização para Baixa Latência", text: "O código final e a infraestrutura devem ser focados em tempo de resposta ultra-baixo (<50ms), redução de concorrência por threads e uso eficiente de memória cache." },
  { id: "interactive", name: "Playbook passo a passo com Exemplos Reais", text: "Estruture o retorno de maneira extremamente interativa, trazendo cenários práticos, códigos que podem ser copiados sem modificações e tabelas de testes." },
  { id: "minimalist", name: "Resumo Técnico Direto ao Ponto", text: "Remova introduções redundantes e polidez desnecessária. Forneça o output final de forma estéril, direta, com o código puro e comandos precisos." }
];

export const GENERATOR_TONES: GeneratorOption[] = [
  { id: "pragmatic", name: "Sênior Técnico Pragmático", text: "Adote um tom sério, profissional, focado puramente em eficácia operacional e mitigação de gargalos reais. Sem rodeios acadêmicos ou floreios linguísticos." },
  { id: "educational", name: "Mentor / Professor Acadêmico de IA", text: "Explique os fundamentos por trás de cada resposta, sugerindo materiais de estudo, links úteis conceituais e justificando com matemática e lógica computacional." },
  { id: "critical", name: "Auditor Altamente Crítico (Red Team)", text: "Desconfie de cada componente e tome como premissa que o código atual está quebrado ou vulnerável. Seja extremamente minucioso e exija provas de integridade." },
  { id: "executive", name: "Executivo Corporativo Estratégico", text: "Faça análises de impacto também sob a ótica econômica, balanceando custos, esforço de implementação (sprints de desenvolvimento) e metas no cronograma." }
];
