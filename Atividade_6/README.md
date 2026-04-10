ATIVIDADE INDIVIDUAL
 
Capacidades:
CT5 — Aplicar métodos e técnicas de programação.
CT6 — Utilizar padrão de projeto para desenvolvimento de aplicativos.
CS3 — Fazer as atividades com organização.

Objetivo
Aplicar técnicas de programação profissional sobre um código JavaScript funcional com múltiplos problemas de qualidade: renomear variáveis e funções com nomes genéricos, adicionar comentários descritivos e realizar refatorações básicas para eliminar código duplicado e nesting excessivo.
 
Produto esperado
Entrega 1 — Código refatorado (sistema-refatorado.js)
Aplique obrigatoriamente as cinco intervenções a seguir:
a) Formatação (identação);
b) Renomear variáveis e funções:
- Substitua todos os nomes genéricos por nomes descritivos que façam sentido no contexto do sistema de playlist;
- Ao renomear, substitua todas as ocorrências — inclusive dentro das funções que usam aquela variável;
- Não há resposta única correta para os nomes. O critério é: quem lê o nome entende imediatamente o que aquilo representa?
c) Comentários de linha:
- Adicione um comentário de linha (//) acima de cada função descrevendo o que ela faz. Uma frase curta e direta — sem descrever parâmetros ou retorno.
- Exemplo do que se espera:
 
// Converte minutos e segundos em total de segundos.
function converterParaSegundos(minutos, segundos) { ... }
 
// Retorna apenas as musicas com duracao menor ou igual ao limite informado.
function filtrarPorDuracaoMaxima(lista, duracaoMaxima) { ... }
 
d) Refatorar a função mostra():
- A função contém cinco linhas quase idênticas atualizando elementos do DOM:
 
document.getElementById('musica0').innerHTML = ...
document.getElementById('musica1').innerHTML = ...
document.getElementById('musica2').innerHTML = ...
document.getElementById('musica3').innerHTML = ...
document.getElementById('musica4').innerHTML = ...
 
Substitua esse bloco por um que produza o mesmo resultado.
 
e) Refatorar a função f4():
- A função de validação possui quatro níveis de if aninhados. Reescreva usando early return: verifique cada condição inválida no início e retorne false imediatamente. Se todas as verificações passarem, retorne true ao final.
 
f) Unificar f7() e f8():
- As duas funções são estruturalmente idênticas — a única diferença é a propriedade que comparam (artista em uma, gênero na outra). Crie uma única função parametrizada que substitua as duas, removendo f7 e f8 do arquivo.
 
Regras
a) O comportamento do código deve ser preservado — não altere o que o sistema faz, apenas como está escrito.
b) Trabalhe na ordem das intervenções: renomeie antes de refatorar. O código fica mais fácil de analisar quando os nomes já são legíveis.
c) É proibido apagar funções sem substituí-las (exceto f7 e f8, que serão substituídas pela função unificada).
d) É proibido uso de inteligência artificial para gerar o código.
 
Rubricas
(CT5) — Aplicar métodos e técnicas de programação
Insuficiente: nomenclatura permanece genérica na maior parte do arquivo; sem comentários; refatorações ausentes ou incorretas.
Básico: a maioria dos nomes foi trocada, mas alguns permanecem genéricos ou inconsistentes; comentários presentes em parte das funções; pelo menos uma das refatorações (d, e ou f) foi aplicada corretamente.
Adequado: todos os nomes são descritivos e fazem sentido no contexto do sistema; comentários presentes em todas as funções com descrição coerente; mostra() refatorada com for; f4() refatorada com early return; f7() e f8() unificadas corretamente.
Avançado: além do adequado, os nomes escolhidos são precisos e coerentes entre si em todo o arquivo (ex.: se usou playlist para o array, usou musica no singular nos objetos internos, não item ou elem); comentários são claros e não repetem o que o nome da função já diz.
 
(CT6) — Utilizar padrão de projeto para desenvolvimento de aplicativos
Insuficiente: não há separação de responsabilidades; código sem organização por seções.
Básico: separação existe mas é superficial ou com alocação incorreta de funções.
Adequado: código organizado em pelo menos duas seções comentadas (ex.: // === LOGICA === e // === INTERFACE ===) com funções alocadas corretamente em cada uma.
Avançado: além do adequado, três seções presentes (Dados/Estado, Lógica, Interface) com alocação consistente e justificável.
 
(CS3) — Fazer as atividades com organização
Insuficiente: repositório sem estrutura ou entrega incompleta.
Básico: arquivos entregues, mas sem separação entre original e refatorado, ou commit único.
Adequado: repositório com os dois arquivos separados, README preenchido e pelo menos dois commits distintos.
Avançado: além do adequado, commits separados por intervenção (ex.: um para renomeação, um para comentários, um para cada refatoração) com mensagens descritivas.
 
(Plágio / NE)
NE — Uso de inteligência artificial para gerar o código refatorado; cópia de trabalho de outro estudante; entrega do código original sem modificações.
Instruções de entrega
 
Crie um repositório no GitHub com o nome atividade_6_refatoracao, tudo em minúsculo, sem acentos, sem espaços, usando _.
 
Estrutura do repositório:
atividade_6_refatoracao/
├── README.md
├── sistema-original.js → código original, sem nenhuma alteração
└── sistema-refatorado.js → sua entrega
