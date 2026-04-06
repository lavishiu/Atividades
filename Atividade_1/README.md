# Atividade 01 — Pesquisa de tags HTML + preenchimento de template (sem CSS)

## Objetivo

Identificar as principais tags HTML e seus atributos, reconhecendo usos semânticos e aplicando esse conhecimento para estruturar corretamente uma página ao preencher um template HTML.

## Capacidades avaliadas

- CT7 — Reconhecer especificações técnicas e paradigmas de linguagem de programação.
- CS3 — Fazer as atividades com organização.

## Produto esperado (duas entregas)

### Entrega 1 — Relatório de pesquisa (4 a 6 páginas)

Relatório com formatação livre contendo:

a) Pesquisa de **20 a 30 tags HTML principais** (incluindo as já vistas: `h1–h6`, `p`, `img`). Para **cada tag**, responder:

- Para que serve?
- Quando costuma ser usada?
- Principais atributos (**mínimo 3 por tag, quando aplicável**), explicando:
  - para que servem
  - exemplos de valores

b) Referências

- Ao final, listar **todas** as fontes utilizadas (ex.: W3Schools, MDN Web Docs, WHATWG, W3C), **com data de acesso**.

### Entrega 2 — Template preenchido (1 arquivo `.html`)

Preencher o arquivo template fornecido pelo docente, substituindo os comentários e completando atributos vazios.

A página deve conter, obrigatoriamente:

- Cabeçalho (`header`)
- Navegação com **âncoras internas** (links `href="#..."` apontando para `id="..."`)
- Conteúdo principal com seções (`main` + `section`)
- 1 imagem com:
  - `alt` descritivo
  - controle de tamanho por atributos `width` e `height`
- Lista (`ul/ol` + `li`)
- Tabela (`table` com cabeçalho e linhas)

## Regras

- Proibido usar CSS nesta atividade:
  - não usar `<style>`
  - não usar `style=""`
  - não criar arquivo `.css`
- O foco é **estrutura, semântica e atributos** no HTML.

## Rubricas

### (CT7)

- **Insuficiente:** não reconheceu corretamente a finalidade das tags e confundiu usos; descreveu atributos de forma incorreta ou insuficiente; não registrou fontes ou registrou fontes que não sustentam o conteúdo; template não atende aos requisitos (estrutura, âncoras, `alt`, tabela e formulário incompletos).
- **Básico:** descreveu tags e atributos de forma geral, com imprecisões; registrou algumas fontes, mas com rastreabilidade limitada; template atende parcialmente aos requisitos, com falhas em atributos essenciais (ex.: `alt`, `href`, `for/id`, `name`, `required`).
- **Adequado:** descreveu corretamente 20–30 tags, com atributos relevantes e exemplos; registrou fontes de forma consistente; template completo e conforme requisitos, usando tags semânticas e atributos essenciais adequados (incluindo `alt` descritivo e `width/height` na imagem, navegação por âncoras e formulário com vinculação `label` ↔ campo).
- **Avançado:** além do adequado, organizou a pesquisa por categorias e destacou boas práticas (hierarquia de títulos, semântica, acessibilidade básica); exemplos e fontes são bem escolhidos; template apresenta alta consistência (padronização de `id/name`, textos claros, nenhum erro de marcação perceptível).

### (CS3)

- **Insuficiente:** não organizou o trabalho (guia sem padrão, faltam seções solicitadas, entregas incompletas); não controla prazos/etapas.
- **Básico:** organizou parcialmente (há padrão em algumas partes, mas com inconsistências); entregas com lacunas ou revisão insuficiente.
- **Adequado:** manteve organização clara (estrutura do relatório, padrão por tag, referências completas, arquivo HTML bem estruturado); concluiu as duas entregas conforme solicitado.
- **Avançado:** além do adequado, demonstrou organização superior (sumário/categorização no relatório, checklist de verificação do template, revisão final consistente e rastreabilidade clara entre “tag/atributo → exemplo → fonte”).

### (Plágio / NE)

- **NE** — Fazer uso de inteligência artificial, cópia de propriedade intelectual sem referenciamento ou cópia de trabalho de outros discentes.

## Instruções de entrega (repositório e organização)

1. Criar um repositório novo no GitHub com o nome:

- `atividade_<numero>_<nome>_<sobrenome>`
- tudo em minúsculo, sem acentos, sem espaços, usando `_`

2. Estrutura de pastas e arquivos:

- `README.md` (na raiz): descreva
  - objetivo da atividade
  - o que foi feito
  - como abrir o HTML no navegador
- `src/index.html` (template preenchido)
- `assets/img/` (somente se usar imagens)
- `docs/` (colocar o relatório de pesquisa)

3. Entrega

- Entregar o **link do repositório** + o **relatório de pesquisa** (arquivo em `docs/`).
