AMIRÁH ALTA PERFUMARIA — GUIA RÁPIDO
====================================

1. COMO ABRIR O SITE
--------------------
Abra o arquivo index.html com dois cliques. O catálogo, a busca, os filtros,
as abas, o modal e os botões funcionam mesmo sem internet.

Arquivos principais:
- index.html: estrutura da página
- style.css: identidade visual e responsividade
- app.js: catálogo offline e funcionalidades
- perfumes.json: catálogo público para hospedagem
- image-sources.json: registro da fonte pública de cada foto
- images/hero-amirah.png: imagem principal
- images/[marca]/: fotos dos 100 produtos


2. FOTOS DOS PRODUTOS
---------------------
As 100 fotos já estão incluídas nas pastas de cada marca. Todas foram salvas
como JPEG e seguem exatamente os caminhos registrados em perfumes.json.

Exemplos:

images/lattafa/khamrah.jpg
images/lattafa/yara.jpg
images/rasasi/hawas-for-men.jpg
images/afnan/9pm.jpg
images/al-haramain/amber-oud-gold-edition.jpg

Para substituir uma foto, mantenha o mesmo caminho e o mesmo nome do arquivo.
Prefira uma imagem JPG quadrada, com fundo limpo e o frasco centralizado.

Regras para novos nomes:
- usar letras minúsculas;
- retirar acentos;
- trocar espaços e sinais por hífen;
- manter a extensão .jpg;
- atualizar também o campo "imagem" no JSON caso o caminho seja alterado.

Se uma imagem for removida ou renomeada, o site mostra automaticamente um
quadrado cinza-claro com um ícone de frasco, sem quebrar o catálogo.


3. PREÇOS
---------
Todos os valores exibidos no site são preços de varejo. O campo público usado
em perfumes.json é "preco_venda". Informe apenas números, sem "R$".

Exemplos: 220 ou 220.50.


4. CONFIGURAR O WHATSAPP DA EMPRESA
-----------------------------------
Abra app.js em um editor de texto e procure esta linha:

const NUMERO_WHATSAPP = "";

Coloque o número comercial com país e DDD, usando somente números. Exemplo:

const NUMERO_WHATSAPP = "5511999999999";

Salve o arquivo. Todos os botões passarão a abrir a conversa com a mensagem
do perfume escolhido. Substitua o número do exemplo pelo número real da Amiráh.


5. CAMPOS DO CATÁLOGO
---------------------
Cada item de perfumes.json possui os campos públicos usados pelo site:
id, marca, nome, volume, preco_venda, descricao, imagem, tags e whatsapp_link.
Há também gênero, famílias olfativas, descrição completa e notas.

- Use null quando o volume ainda precisar ser confirmado.
- Tags aceitas: "mais-vendido" e "novo".
- Gêneros aceitos: "feminino", "masculino" e "unissex".
- Famílias aceitas: "doce", "amadeirado", "floral", "oriental", "citrico",
  "aquatico", "especiado" e "frutado".

Quando volume estiver como null, o site mostra "Volume sob consulta". Isso
evita anunciar uma apresentação diferente da disponível no estoque.


6. CUIDADO COM INFORMAÇÕES INTERNAS
-----------------------------------
Tudo o que estiver em HTML, CSS, JS ou JSON pode ser visto pelo público. Use
no site somente informações comerciais destinadas aos clientes. Não copie
para esta pasta planilhas, indicadores, cálculos ou anotações internas.


7. PUBLICAÇÃO
-------------
O site é estático e pode ser hospedado em qualquer serviço que aceite HTML,
CSS, JavaScript, JSON e imagens. Envie a pasta completa, preservando os nomes e
a estrutura de subpastas. Quando hospedado, perfumes.json passa a ser carregado
automaticamente como fonte principal do catálogo.

Observação: app.js contém uma cópia pública do catálogo para o modo offline.
Se os produtos forem alterados depois, sincronize também essa cópia para que a
versão aberta diretamente pelo arquivo index.html permaneça atualizada.
