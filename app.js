"use strict";

// Catálogo incorporado para que o site também funcione ao abrir index.html diretamente.
// Quando publicado em um servidor, perfumes.json é carregado como fonte principal.
const CATALOGO_LOCAL =
/* CATÁLOGO LOCAL — INÍCIO */
[{"id":1,"marca":"Lattafa","nome":"Khamrah","volume":100,"preco_venda":419.9,"descricao":"Uma composição unissex com Canela, Tâmaras e Baunilha.","descricao_completa":"Uma criação unissex de Lattafa. A abertura revela Canela, Noz-moscada, Bergamota; no coração, Tâmaras, Pralinê, Tuberosa; ao fundo, Baunilha, Âmbar, Almíscar, Oud, Fava Tonka, Couro, Benjoim, Noz-moscada, Açúcar. O resultado é uma assinatura doce, oriental e floral.","imagem":"images/lattafa/khamrah.jpg","tags":["mais-vendido"],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["doce","oriental","floral"],"notas":{"topo":"Canela, Noz-moscada, Bergamota","coracao":"Tâmaras, Pralinê, Tuberosa","fundo":"Baunilha, Âmbar, Almíscar, Oud, Fava Tonka, Couro, Benjoim, Noz-moscada, Açúcar"}},{"id":2,"marca":"Lattafa","nome":"Yara","volume":100,"preco_venda":284.9,"descricao":"Uma composição feminina com Heliotrópio, Gourmand e Baunilha.","descricao_completa":"Uma criação feminina de Lattafa. A abertura revela Heliotrópio, Orquídea, Tangerina; no coração, Gourmand, Frutas Tropicais; ao fundo, Baunilha, Almíscar, Sândalo. O resultado é uma assinatura doce, floral e amadeirada.","imagem":"images/lattafa/yara.jpg","tags":["mais-vendido"],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["doce","floral","amadeirado"],"notas":{"topo":"Heliotrópio, Orquídea, Tangerina","coracao":"Gourmand, Frutas Tropicais","fundo":"Baunilha, Almíscar, Sândalo"}},{"id":3,"marca":"Lattafa","nome":"Yara Tous","volume":100,"preco_venda":359.9,"descricao":"Uma composição feminina com Manga, Heliotrópio e Baunilha.","descricao_completa":"Uma criação feminina de Lattafa. A abertura revela Manga, Coco, Maracujá; no coração, Heliotrópio, Jasmim, Flor Laranjeira; ao fundo, Baunilha, Almíscar, Sândalo. O resultado é uma assinatura floral, doce e frutada.","imagem":"images/lattafa/yara-tous.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["floral","doce","frutado"],"notas":{"topo":"Manga, Coco, Maracujá","coracao":"Heliotrópio, Jasmim, Flor Laranjeira","fundo":"Baunilha, Almíscar, Sândalo"}},{"id":4,"marca":"Lattafa","nome":"Yara Moi","volume":100,"preco_venda":359.9,"descricao":"Uma composição feminina com Pêssego, Caramelo e Baunilha.","descricao_completa":"Uma criação feminina de Lattafa. A abertura revela Pêssego, Jasmim; no coração, Caramelo, Âmbar; ao fundo, Baunilha, Almíscar, Sândalo. O resultado é uma assinatura doce, oriental e amadeirada.","imagem":"images/lattafa/yara-moi.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["doce","oriental","amadeirado"],"notas":{"topo":"Pêssego, Jasmim","coracao":"Caramelo, Âmbar","fundo":"Baunilha, Almíscar, Sândalo"}},{"id":5,"marca":"Lattafa","nome":"Asad","volume":100,"preco_venda":359.9,"descricao":"Uma composição masculina com Pimenta Preta, Café e Âmbar.","descricao_completa":"Uma criação masculina de Lattafa. A abertura revela Pimenta Preta, Abacaxi, Tabaco; no coração, Café, Íris, Patchouli; ao fundo, Âmbar, Almíscar, Baunilha, Madeiras Secas, Benjoim. O resultado é uma assinatura oriental, amadeirada e doce.","imagem":"images/lattafa/asad.jpg","tags":["mais-vendido"],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["oriental","amadeirado","doce"],"notas":{"topo":"Pimenta Preta, Abacaxi, Tabaco","coracao":"Café, Íris, Patchouli","fundo":"Âmbar, Almíscar, Baunilha, Madeiras Secas, Benjoim"}},{"id":6,"marca":"Lattafa","nome":"Asad Zanzibar","volume":100,"preco_venda":424.95,"descricao":"Uma composição masculina com Lavanda, Água de Coco e Âmbar.","descricao_completa":"Uma criação masculina de Lattafa. A abertura revela Lavanda, Pimenta Preta; no coração, Água de Coco, Íris, Sal; ao fundo, Âmbar, Almíscar, Sândalo, Madeiras. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/lattafa/asad-zanzibar.jpg","tags":["novo"],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Lavanda, Pimenta Preta","coracao":"Água de Coco, Íris, Sal","fundo":"Âmbar, Almíscar, Sândalo, Madeiras"}},{"id":7,"marca":"Lattafa","nome":"Bade\u0027e Al Oud - Oud for Glory","volume":100,"preco_venda":449.45,"descricao":"Uma composição unissex com Açafrão, Oud e Patchouli.","descricao_completa":"Uma criação unissex de Lattafa. A abertura revela Açafrão, Lavanda; no coração, Oud, Madeiras; ao fundo, Patchouli, Almíscar. O resultado é uma assinatura amadeirada, oriental e floral.","imagem":"images/lattafa/bade-e-al-oud-oud-for-glory.jpg","tags":["mais-vendido"],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","oriental","floral"],"notas":{"topo":"Açafrão, Lavanda","coracao":"Oud, Madeiras","fundo":"Patchouli, Almíscar"}},{"id":8,"marca":"Lattafa","nome":"Bade\u0027e Al Oud - Amethyst","volume":100,"preco_venda":289.99,"descricao":"Uma composição unissex com Rosa Turca, Rosa e Baunilha.","descricao_completa":"Uma criação unissex de Lattafa. A abertura revela Rosa Turca, Oud; no coração, Rosa, Âmbar; ao fundo, Baunilha, Almíscar, Sândalo. O resultado é uma assinatura oriental, amadeirada e doce.","imagem":"images/lattafa/bade-e-al-oud-amethyst.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["oriental","amadeirado","doce"],"notas":{"topo":"Rosa Turca, Oud","coracao":"Rosa, Âmbar","fundo":"Baunilha, Almíscar, Sândalo"}},{"id":9,"marca":"Lattafa","nome":"Bade\u0027e Al Oud - Honor \u0026 Glory","volume":100,"preco_venda":439.9,"descricao":"Uma composição unissex com Abacaxi, Especiarias e Baunilha.","descricao_completa":"Uma criação unissex de Lattafa. A abertura revela Abacaxi, Crème Brûlée; no coração, Especiarias, Frutas; ao fundo, Baunilha, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, oriental e frutada.","imagem":"images/lattafa/bade-e-al-oud-honor-e-glory.jpg","tags":["novo"],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","oriental","frutado"],"notas":{"topo":"Abacaxi, Crème Brûlée","coracao":"Especiarias, Frutas","fundo":"Baunilha, Almíscar, Sândalo, Oud"}},{"id":10,"marca":"Lattafa","nome":"Bade\u0027e Al Oud - Sublime","volume":100,"preco_venda":399.9,"descricao":"Uma composição feminina com Maçã, Ameixa e Baunilha.","descricao_completa":"Uma criação feminina de Lattafa. A abertura revela Maçã, Lichia, Rosa; no coração, Ameixa, Jasmim; ao fundo, Baunilha, Almíscar, Patchouli, Oud. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/lattafa/bade-e-al-oud-sublime.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Maçã, Lichia, Rosa","coracao":"Ameixa, Jasmim","fundo":"Baunilha, Almíscar, Patchouli, Oud"}},{"id":11,"marca":"Lattafa","nome":"Nebras","volume":100,"preco_venda":499.9,"descricao":"Uma composição unissex com Baunilha, Frutas Vermelhas e Baunilha.","descricao_completa":"Uma criação unissex de Lattafa. A abertura revela Baunilha, Cacau; no coração, Frutas Vermelhas, Heliotrópio; ao fundo, Baunilha, Almíscar, Sândalo, Oud. O resultado é uma assinatura doce, amadeirada e oriental.","imagem":"images/lattafa/nebras.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["doce","amadeirado","oriental"],"notas":{"topo":"Baunilha, Cacau","coracao":"Frutas Vermelhas, Heliotrópio","fundo":"Baunilha, Almíscar, Sândalo, Oud"}},{"id":12,"marca":"Lattafa","nome":"Eclaire","volume":100,"preco_venda":396.98,"descricao":"Uma composição feminina com Caramelo, Notas Lactônicas e Baunilha.","descricao_completa":"Uma criação feminina de Lattafa. A abertura revela Caramelo, Mel; no coração, Notas Lactônicas, Flor Laranjeira; ao fundo, Baunilha, Almíscar, Sândalo, Oud. O resultado é uma assinatura doce, amadeirada e oriental.","imagem":"images/lattafa/eclaire.jpg","tags":["novo"],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["doce","amadeirado","oriental"],"notas":{"topo":"Caramelo, Mel","coracao":"Notas Lactônicas, Flor Laranjeira","fundo":"Baunilha, Almíscar, Sândalo, Oud"}},{"id":13,"marca":"Lattafa","nome":"Ameer Al Oudh Intense Oud","volume":100,"preco_venda":399.9,"descricao":"Uma composição unissex com Açúcar, Oud e Almíscar.","descricao_completa":"Uma criação unissex de Lattafa. A abertura revela Açúcar, Madeiras; no coração, Oud, Baunilha; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, doce e oriental.","imagem":"images/lattafa/ameer-al-oudh-intense-oud.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","doce","oriental"],"notas":{"topo":"Açúcar, Madeiras","coracao":"Oud, Baunilha","fundo":"Almíscar, Sândalo, Oud"}},{"id":14,"marca":"Lattafa","nome":"Fakhar Black","volume":100,"preco_venda":299,"descricao":"Uma composição masculina com Maçã, Especiarias e Almíscar.","descricao_completa":"Uma criação masculina de Lattafa. A abertura revela Maçã, Aromático, Fresco; no coração, Especiarias, Madeiras; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, oriental e especiada.","imagem":"images/lattafa/fakhar-black.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","especiado"],"notas":{"topo":"Maçã, Aromático, Fresco","coracao":"Especiarias, Madeiras","fundo":"Almíscar, Sândalo, Oud"}},{"id":15,"marca":"Lattafa","nome":"Fakhar Rose","volume":100,"preco_venda":388.4,"descricao":"Uma composição feminina com Floral Branco, Rosa e Almíscar.","descricao_completa":"Uma criação feminina de Lattafa. A abertura revela Floral Branco, Tuberosa; no coração, Rosa, Jasmim; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura floral, amadeirada e oriental.","imagem":"images/lattafa/fakhar-rose.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["floral","amadeirado","oriental"],"notas":{"topo":"Floral Branco, Tuberosa","coracao":"Rosa, Jasmim","fundo":"Almíscar, Sândalo, Oud"}},{"id":16,"marca":"Lattafa","nome":"Fakhar Extrait Gold","volume":100,"preco_venda":459.9,"descricao":"Uma composição unissex com Tuberosa, Floral e Almíscar.","descricao_completa":"Uma criação unissex de Lattafa. A abertura revela Tuberosa, Couro, Vetiver; no coração, Floral, Especiado; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/lattafa/fakhar-extrait-gold.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Tuberosa, Couro, Vetiver","coracao":"Floral, Especiado","fundo":"Almíscar, Sândalo, Oud"}},{"id":17,"marca":"Lattafa","nome":"Qaed Al Fursan","volume":90,"preco_venda":359.9,"descricao":"Uma composição masculina com Abacaxi Doce, Jasmim e Almíscar.","descricao_completa":"Uma criação masculina de Lattafa. A abertura revela Abacaxi Doce, Açafrão; no coração, Jasmim, Frutas; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, oriental e frutada.","imagem":"images/lattafa/qaed-al-fursan.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","frutado"],"notas":{"topo":"Abacaxi Doce, Açafrão","coracao":"Jasmim, Frutas","fundo":"Almíscar, Sândalo, Oud"}},{"id":18,"marca":"Lattafa","nome":"Qaed Al Fursan Unlimited","volume":90,"preco_venda":359.9,"descricao":"Uma composição masculina com Coco, Floral e Almíscar.","descricao_completa":"Uma criação masculina de Lattafa. A abertura revela Coco, Jasmim, Cítricos; no coração, Floral, Frutado; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/lattafa/qaed-al-fursan-unlimited.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Coco, Jasmim, Cítricos","coracao":"Floral, Frutado","fundo":"Almíscar, Sândalo, Oud"}},{"id":19,"marca":"Lattafa","nome":"Hayaati","volume":100,"preco_venda":269.9,"descricao":"Uma composição unissex com Maçã, Floral e Almíscar.","descricao_completa":"Uma criação unissex de Lattafa. A abertura revela Maçã, Aquático; no coração, Floral, Almíscar; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, oriental e floral.","imagem":"images/lattafa/hayaati.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","oriental","floral"],"notas":{"topo":"Maçã, Aquático","coracao":"Floral, Almíscar","fundo":"Almíscar, Sândalo, Oud"}},{"id":20,"marca":"Lattafa","nome":"Hayaati Gold Elixir","volume":100,"preco_venda":399.9,"descricao":"Uma composição masculina com Bergamota, Couro e Almíscar.","descricao_completa":"Uma criação masculina de Lattafa. A abertura revela Bergamota, Toronja, Cassis; no coração, Couro, Pêssego, Açafrão; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, oriental e cítrica.","imagem":"images/lattafa/hayaati-gold-elixir.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","citrico"],"notas":{"topo":"Bergamota, Toronja, Cassis","coracao":"Couro, Pêssego, Açafrão","fundo":"Almíscar, Sândalo, Oud"}},{"id":21,"marca":"Lattafa","nome":"Najdia","volume":100,"preco_venda":269.9,"descricao":"Uma composição masculina com Cítrico, Especiarias e Almíscar.","descricao_completa":"Uma criação masculina de Lattafa. A abertura revela Cítrico, Aquático; no coração, Especiarias, Floral; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, oriental e floral.","imagem":"images/lattafa/najdia.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","floral"],"notas":{"topo":"Cítrico, Aquático","coracao":"Especiarias, Floral","fundo":"Almíscar, Sândalo, Oud"}},{"id":22,"marca":"Lattafa","nome":"Maahir Black Edition","volume":100,"preco_venda":499.9,"descricao":"Uma composição masculina com Fumaça, Especiarias e Almíscar.","descricao_completa":"Uma criação masculina de Lattafa. A abertura revela Fumaça, Couro, Pimenta; no coração, Especiarias, Madeiras; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, oriental e especiada.","imagem":"images/lattafa/maahir-black-edition.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","especiado"],"notas":{"topo":"Fumaça, Couro, Pimenta","coracao":"Especiarias, Madeiras","fundo":"Almíscar, Sândalo, Oud"}},{"id":23,"marca":"Lattafa","nome":"Maahir Legacy","volume":100,"preco_venda":499.9,"descricao":"Uma composição masculina com Cítrico, Floral e Almíscar.","descricao_completa":"Uma criação masculina de Lattafa. A abertura revela Cítrico, Menta, Lavanda; no coração, Floral, Especiado; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/lattafa/maahir-legacy.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Cítrico, Menta, Lavanda","coracao":"Floral, Especiado","fundo":"Almíscar, Sândalo, Oud"}},{"id":24,"marca":"Lattafa","nome":"Ana Abiyedh Rouge","volume":60,"preco_venda":269.9,"descricao":"Uma composição unissex com Algodão Doce, Doce e Almíscar.","descricao_completa":"Uma criação unissex de Lattafa. A abertura revela Algodão Doce, Açafrão; no coração, Doce, Especiado; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, oriental e especiada.","imagem":"images/lattafa/ana-abiyedh-rouge.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","oriental","especiado"],"notas":{"topo":"Algodão Doce, Açafrão","coracao":"Doce, Especiado","fundo":"Almíscar, Sândalo, Oud"}},{"id":25,"marca":"Lattafa","nome":"Ana Abiyedh White","volume":60,"preco_venda":269.9,"descricao":"Uma composição unissex com Almíscar, Floral e Almíscar.","descricao_completa":"Uma criação unissex de Lattafa. A abertura revela Almíscar, Atalcado, Cipriol; no coração, Floral, Atalcado; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, oriental e floral.","imagem":"images/lattafa/ana-abiyedh-white.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","oriental","floral"],"notas":{"topo":"Almíscar, Atalcado, Cipriol","coracao":"Floral, Atalcado","fundo":"Almíscar, Sândalo, Oud"}},{"id":26,"marca":"Lattafa","nome":"Raghba","volume":100,"preco_venda":269.9,"descricao":"Uma composição unissex com Baunilha, Doce e Almíscar.","descricao_completa":"Uma criação unissex de Lattafa. A abertura revela Baunilha, Oud, Incenso; no coração, Doce, Especiado; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura oriental, amadeirada e doce.","imagem":"images/lattafa/raghba.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["oriental","amadeirado","doce"],"notas":{"topo":"Baunilha, Oud, Incenso","coracao":"Doce, Especiado","fundo":"Almíscar, Sândalo, Oud"}},{"id":27,"marca":"Lattafa","nome":"Qaa\u0027ed","volume":100,"preco_venda":499.9,"descricao":"Uma composição masculina com Cardamomo, Sândalo e Almíscar.","descricao_completa":"Uma criação masculina de Lattafa. A abertura revela Cardamomo, Couro; no coração, Sândalo, Especiarias; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, oriental e especiada.","imagem":"images/lattafa/qaa-ed.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","especiado"],"notas":{"topo":"Cardamomo, Couro","coracao":"Sândalo, Especiarias","fundo":"Almíscar, Sândalo, Oud"}},{"id":28,"marca":"Lattafa","nome":"Al Noble Wazeer","volume":100,"preco_venda":359.9,"descricao":"Uma composição masculina com Frutado, Floral e Almíscar.","descricao_completa":"Uma criação masculina de Lattafa. A abertura revela Frutado, Íris, Chocolate; no coração, Floral, Gourmand; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura doce, amadeirada e floral.","imagem":"images/lattafa/al-noble-wazeer.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["doce","amadeirado","floral"],"notas":{"topo":"Frutado, Íris, Chocolate","coracao":"Floral, Gourmand","fundo":"Almíscar, Sândalo, Oud"}},{"id":29,"marca":"Lattafa","nome":"Al Noble Ameer","volume":100,"preco_venda":359.9,"descricao":"Uma composição masculina com Maçã, Frutado e Almíscar.","descricao_completa":"Uma criação masculina de Lattafa. A abertura revela Maçã, Oud, Patchouli; no coração, Frutado, Amadeirado; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, oriental e frutada.","imagem":"images/lattafa/al-noble-ameer.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","frutado"],"notas":{"topo":"Maçã, Oud, Patchouli","coracao":"Frutado, Amadeirado","fundo":"Almíscar, Sândalo, Oud"}},{"id":30,"marca":"Lattafa","nome":"Ramz Silver","volume":100,"preco_venda":319.9,"descricao":"Uma composição masculina com Pera, Frutado e Almíscar.","descricao_completa":"Uma criação masculina de Lattafa. A abertura revela Pera, Baunilha, Menta; no coração, Frutado, Fresco; ao fundo, Almíscar, Sândalo, Oud. O resultado é uma assinatura amadeirada, oriental e frutada.","imagem":"images/lattafa/ramz-silver.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","frutado"],"notas":{"topo":"Pera, Baunilha, Menta","coracao":"Frutado, Fresco","fundo":"Almíscar, Sândalo, Oud"}},{"id":31,"marca":"Armaf","nome":"Club de Nuit Intense Man","volume":null,"preco_venda":699.9,"descricao":"Uma composição masculina com Limão, Bétula e Almíscar.","descricao_completa":"Uma criação masculina de Armaf. A abertura revela Limão, Abacaxi, Bergamota, Groselha; no coração, Bétula, Jasmim, Rosa; ao fundo, Almíscar, Patchouli, Almíscar, Baunilha, Ambroxan. O resultado é uma assinatura floral, cítrica e frutada.","imagem":"images/armaf/club-de-nuit-intense-man.jpg","tags":["mais-vendido"],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["floral","citrico","frutado"],"notas":{"topo":"Limão, Abacaxi, Bergamota, Groselha","coracao":"Bétula, Jasmim, Rosa","fundo":"Almíscar, Patchouli, Almíscar, Baunilha, Ambroxan"}},{"id":32,"marca":"Armaf","nome":"Club de Nuit Intense Woman","volume":null,"preco_venda":599.9,"descricao":"Uma composição feminina com Rosa, Floral e Almíscar.","descricao_completa":"Uma criação feminina de Armaf. A abertura revela Rosa, Patchouli, Especiarias; no coração, Floral, Especiado; ao fundo, Almíscar, Sândalo, Baunilha. O resultado é uma assinatura amadeirada, floral e doce.","imagem":"images/armaf/club-de-nuit-intense-woman.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["amadeirado","floral","doce"],"notas":{"topo":"Rosa, Patchouli, Especiarias","coracao":"Floral, Especiado","fundo":"Almíscar, Sândalo, Baunilha"}},{"id":33,"marca":"Armaf","nome":"Club de Nuit Milestone","volume":null,"preco_venda":639.9,"descricao":"Uma composição masculina com Mar, Violeta e Almíscar.","descricao_completa":"Uma criação masculina de Armaf. A abertura revela Mar, Frutas Vermelhas, Bergamota; no coração, Violeta, Madeiras Brancas, Sândalo; ao fundo, Almíscar, Vetiver, Almíscar. O resultado é uma assinatura amadeirada, doce e floral.","imagem":"images/armaf/club-de-nuit-milestone.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","doce","floral"],"notas":{"topo":"Mar, Frutas Vermelhas, Bergamota","coracao":"Violeta, Madeiras Brancas, Sândalo","fundo":"Almíscar, Vetiver, Almíscar"}},{"id":34,"marca":"Armaf","nome":"Club de Nuit Sillage","volume":null,"preco_venda":799.9,"descricao":"Uma composição masculina com Chá Preto, Floral e Almíscar.","descricao_completa":"Uma criação masculina de Armaf. A abertura revela Chá Preto, Cítrico, Groselha; no coração, Floral, Verde; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/armaf/club-de-nuit-sillage.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Chá Preto, Cítrico, Groselha","coracao":"Floral, Verde","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":35,"marca":"Armaf","nome":"Club de Nuit Untold","volume":null,"preco_venda":639.9,"descricao":"Uma composição unissex com Açafrão, Especiado e Almíscar.","descricao_completa":"Uma criação unissex de Armaf. A abertura revela Açafrão, Madeira Âmbar, Algodão Doce; no coração, Especiado, Doce; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e especiada.","imagem":"images/armaf/club-de-nuit-untold.jpg","tags":["novo"],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","oriental","especiado"],"notas":{"topo":"Açafrão, Madeira Âmbar, Algodão Doce","coracao":"Especiado, Doce","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":36,"marca":"Armaf","nome":"Club de Nuit Iconic","volume":null,"preco_venda":507,"descricao":"Uma composição masculina com Toronja, Cítrico e Almíscar.","descricao_completa":"Uma criação masculina de Armaf. A abertura revela Toronja, Gengibre, Incenso; no coração, Cítrico, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura oriental, amadeirada e cítrica.","imagem":"images/armaf/club-de-nuit-iconic.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["oriental","amadeirado","citrico"],"notas":{"topo":"Toronja, Gengibre, Incenso","coracao":"Cítrico, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":37,"marca":"Armaf","nome":"Club de Nuit White Imperiale","volume":null,"preco_venda":490,"descricao":"Uma composição feminina com Lichia, Floral e Almíscar.","descricao_completa":"Uma criação feminina de Armaf. A abertura revela Lichia, Baunilha, Rosa Turca; no coração, Floral, Frutado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura floral, doce e amadeirada.","imagem":"images/armaf/club-de-nuit-white-imperiale.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["floral","doce","amadeirado"],"notas":{"topo":"Lichia, Baunilha, Rosa Turca","coracao":"Floral, Frutado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":38,"marca":"Armaf","nome":"Tres Nuit","volume":100,"preco_venda":468.5,"descricao":"Uma composição masculina com Limão, Íris e Almíscar.","descricao_completa":"Uma criação masculina de Armaf. A abertura revela Limão, Íris, Lavanda; no coração, Íris, Sândalo, Verdes; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura floral, amadeirada e oriental.","imagem":"images/armaf/tres-nuit.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["floral","amadeirado","oriental"],"notas":{"topo":"Limão, Íris, Lavanda","coracao":"Íris, Sândalo, Verdes","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":39,"marca":"Armaf","nome":"Hunter Intense","volume":100,"preco_venda":399,"descricao":"Uma composição masculina com Bergamota, Lavanda e Almíscar.","descricao_completa":"Uma criação masculina de Armaf. A abertura revela Bergamota, Toronja, Limão; no coração, Lavanda, Especiarias, Floral; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura floral, cítrica e amadeirada.","imagem":"images/armaf/hunter-intense.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["floral","citrico","amadeirado"],"notas":{"topo":"Bergamota, Toronja, Limão","coracao":"Lavanda, Especiarias, Floral","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":40,"marca":"Armaf","nome":"Ventana","volume":100,"preco_venda":399,"descricao":"Uma composição masculina com Grapefruit, Floral e Almíscar.","descricao_completa":"Uma criação masculina de Armaf. A abertura revela Grapefruit, Lavanda, Gerânio; no coração, Floral, Fresco; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura floral, amadeirada e oriental.","imagem":"images/armaf/ventana.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["floral","amadeirado","oriental"],"notas":{"topo":"Grapefruit, Lavanda, Gerânio","coracao":"Floral, Fresco","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":41,"marca":"Armaf","nome":"Odyssey Homme","volume":null,"preco_venda":375,"descricao":"Uma composição masculina com Baunilha, Floral e Almíscar.","descricao_completa":"Uma criação masculina de Armaf. A abertura revela Baunilha, Íris, Couro; no coração, Floral, Amadeirado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, floral e doce.","imagem":"images/armaf/odyssey-homme.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","floral","doce"],"notas":{"topo":"Baunilha, Íris, Couro","coracao":"Floral, Amadeirado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":42,"marca":"Armaf","nome":"Odyssey Mega","volume":null,"preco_venda":449,"descricao":"Uma composição masculina com Gengibre, Especiado e Almíscar.","descricao_completa":"Uma criação masculina de Armaf. A abertura revela Gengibre, Cítrico, Fresco; no coração, Especiado, Aquático; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e cítrica.","imagem":"images/armaf/odyssey-mega.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","citrico"],"notas":{"topo":"Gengibre, Cítrico, Fresco","coracao":"Especiado, Aquático","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":43,"marca":"Armaf","nome":"Legesi Men","volume":100,"preco_venda":399,"descricao":"Uma composição masculina com Ervas, Aromático e Almíscar.","descricao_completa":"Uma criação masculina de Armaf. A abertura revela Ervas, Lavanda, Alecrim; no coração, Aromático, Fresco; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/armaf/legesi-men.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Ervas, Lavanda, Alecrim","coracao":"Aromático, Fresco","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":44,"marca":"Armaf","nome":"Aura Fresh","volume":100,"preco_venda":399,"descricao":"Uma composição masculina com Carambola, Frutado e Almíscar.","descricao_completa":"Uma criação masculina de Armaf. A abertura revela Carambola, Cítricos, Madeiras; no coração, Frutado, Fresco; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e cítrica.","imagem":"images/armaf/aura-fresh.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","citrico"],"notas":{"topo":"Carambola, Cítricos, Madeiras","coracao":"Frutado, Fresco","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":45,"marca":"Armaf","nome":"Craze","volume":100,"preco_venda":538,"descricao":"Uma composição masculina com Amêndoa, Floral e Almíscar.","descricao_completa":"Uma criação masculina de Armaf. A abertura revela Amêndoa, Baunilha, Heliotrópio; no coração, Floral, Gourmand; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura doce, floral e amadeirada.","imagem":"images/armaf/craze.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["doce","floral","amadeirado"],"notas":{"topo":"Amêndoa, Baunilha, Heliotrópio","coracao":"Floral, Gourmand","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":46,"marca":"Afnan","nome":"Supremacy Silver","volume":null,"preco_venda":449,"descricao":"Uma composição masculina com Groselha, Floral e Almíscar.","descricao_completa":"Uma criação masculina de Afnan. A abertura revela Groselha, Abacaxi, Musgo; no coração, Floral, Frutado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura frutada, amadeirada e floral.","imagem":"images/afnan/supremacy-silver.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["frutado","amadeirado","floral"],"notas":{"topo":"Groselha, Abacaxi, Musgo","coracao":"Floral, Frutado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":47,"marca":"Afnan","nome":"Supremacy Not Only Intense","volume":null,"preco_venda":499,"descricao":"Uma composição masculina com Maçã, Carvalho e Almíscar.","descricao_completa":"Uma criação masculina de Afnan. A abertura revela Maçã, Groselha, Cítricos; no coração, Carvalho, Patchouli, Especiarias; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, frutada e oriental.","imagem":"images/afnan/supremacy-not-only-intense.jpg","tags":["mais-vendido"],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","frutado","oriental"],"notas":{"topo":"Maçã, Groselha, Cítricos","coracao":"Carvalho, Patchouli, Especiarias","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":48,"marca":"Afnan","nome":"Supremacy in Heaven","volume":100,"preco_venda":449,"descricao":"Uma composição masculina com Mandarina, Floral e Almíscar.","descricao_completa":"Uma criação masculina de Afnan. A abertura revela Mandarina, Chá Verde; no coração, Floral, Fresco; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/afnan/supremacy-in-heaven.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Mandarina, Chá Verde","coracao":"Floral, Fresco","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":49,"marca":"Afnan","nome":"Supremacy Incense","volume":100,"preco_venda":479,"descricao":"Uma composição masculina com Orégano, Incenso e Almíscar.","descricao_completa":"Uma criação masculina de Afnan. A abertura revela Orégano, Incenso, Especiarias; no coração, Incenso, Floral, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura oriental, amadeirada e floral.","imagem":"images/afnan/supremacy-incense.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["oriental","amadeirado","floral"],"notas":{"topo":"Orégano, Incenso, Especiarias","coracao":"Incenso, Floral, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":50,"marca":"Afnan","nome":"Turathi Blue","volume":90,"preco_venda":449,"descricao":"Uma composição masculina com Cítricos, Floral e Almíscar.","descricao_completa":"Uma criação masculina de Afnan. A abertura revela Cítricos, Almíscar, Madeiras; no coração, Floral, Amadeirado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/afnan/turathi-blue.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Cítricos, Almíscar, Madeiras","coracao":"Floral, Amadeirado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":51,"marca":"Afnan","nome":"Turathi Brown","volume":90,"preco_venda":449,"descricao":"Uma composição masculina com Patchouli, Âmbar e Almíscar.","descricao_completa":"Uma criação masculina de Afnan. A abertura revela Patchouli, Ozônico, Especiarias; no coração, Âmbar, Baunilha, Rosa; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e doce.","imagem":"images/afnan/turathi-brown.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","doce"],"notas":{"topo":"Patchouli, Ozônico, Especiarias","coracao":"Âmbar, Baunilha, Rosa","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":52,"marca":"Afnan","nome":"9pm","volume":100,"preco_venda":399,"descricao":"Uma composição masculina com Maçã, Floral e Almíscar.","descricao_completa":"Uma criação masculina de Afnan. A abertura revela Maçã, Baunilha, Canela; no coração, Floral, Frutado, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura frutada, doce e amadeirada.","imagem":"images/afnan/9pm.jpg","tags":["mais-vendido"],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["frutado","doce","amadeirado"],"notas":{"topo":"Maçã, Baunilha, Canela","coracao":"Floral, Frutado, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":53,"marca":"Afnan","nome":"9am Dive","volume":null,"preco_venda":399,"descricao":"Uma composição masculina com Limão, Maçã e Almíscar.","descricao_completa":"Uma criação masculina de Afnan. A abertura revela Limão, Pimenta Rosa, Menta; no coração, Maçã, Incenso, Cedro; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e floral.","imagem":"images/afnan/9am-dive.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","floral"],"notas":{"topo":"Limão, Pimenta Rosa, Menta","coracao":"Maçã, Incenso, Cedro","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":54,"marca":"Afnan","nome":"Rare Carbon","volume":100,"preco_venda":429,"descricao":"Uma composição masculina com Couro, Violeta e Almíscar.","descricao_completa":"Uma criação masculina de Afnan. A abertura revela Couro, Folha Violeta, Noz-moscada; no coração, Violeta, Rosa, Oud, Cedro; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/afnan/rare-carbon.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Couro, Folha Violeta, Noz-moscada","coracao":"Violeta, Rosa, Oud, Cedro","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":55,"marca":"Afnan","nome":"Modest Une","volume":100,"preco_venda":399,"descricao":"Uma composição masculina com Pimenta, Floral e Almíscar.","descricao_completa":"Uma criação masculina de Afnan. A abertura revela Pimenta, Lavanda, Ambroxan; no coração, Floral, Fresco, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura floral, amadeirada e oriental.","imagem":"images/afnan/modest-une.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["floral","amadeirado","oriental"],"notas":{"topo":"Pimenta, Lavanda, Ambroxan","coracao":"Floral, Fresco, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":56,"marca":"Afnan","nome":"Historic Olmeda","volume":100,"preco_venda":449,"descricao":"Uma composição masculina com Junípero, Frutado e Almíscar.","descricao_completa":"Uma criação masculina de Afnan. A abertura revela Junípero, Toronja, Cítrico; no coração, Frutado, Fresco; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e cítrica.","imagem":"images/afnan/historic-olmeda.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","citrico"],"notas":{"topo":"Junípero, Toronja, Cítrico","coracao":"Frutado, Fresco","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":57,"marca":"Afnan","nome":"Mirsaal of Trust","volume":90,"preco_venda":429,"descricao":"Uma composição unissex com Framboesa, Frutado e Almíscar.","descricao_completa":"Uma criação unissex de Afnan. A abertura revela Framboesa, Couro, Açafrão; no coração, Frutado, Couro, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura frutada, amadeirada e oriental.","imagem":"images/afnan/mirsaal-of-trust.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["frutado","amadeirado","oriental"],"notas":{"topo":"Framboesa, Couro, Açafrão","coracao":"Frutado, Couro, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":58,"marca":"Afnan","nome":"Mirsaal with Love","volume":90,"preco_venda":429,"descricao":"Uma composição unissex com Almíscar, Floral e Almíscar.","descricao_completa":"Uma criação unissex de Afnan. A abertura revela Almíscar, Patchouli, Doce; no coração, Floral, Doce; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/afnan/mirsaal-with-love.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Almíscar, Patchouli, Doce","coracao":"Floral, Doce","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":59,"marca":"Afnan","nome":"Souvenir Floral Bouquet","volume":100,"preco_venda":449,"descricao":"Uma composição feminina com Ruibarbo, Floral e Almíscar.","descricao_completa":"Uma criação feminina de Afnan. A abertura revela Ruibarbo, Lichia, Rosa; no coração, Floral, Frutado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura floral, amadeirada e oriental.","imagem":"images/afnan/souvenir-floral-bouquet.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["floral","amadeirado","oriental"],"notas":{"topo":"Ruibarbo, Lichia, Rosa","coracao":"Floral, Frutado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":60,"marca":"Afnan","nome":"Violet Bouquet","volume":80,"preco_venda":429,"descricao":"Uma composição feminina com Jasmim, Floral e Almíscar.","descricao_completa":"Uma criação feminina de Afnan. A abertura revela Jasmim, Açafrão, Madeiras; no coração, Floral, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/afnan/violet-bouquet.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Jasmim, Açafrão, Madeiras","coracao":"Floral, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":61,"marca":"Maison Alhambra","nome":"Kismet Angel / Magic","volume":100,"preco_venda":249,"descricao":"Uma composição unissex com Conhaque, Avelã e Almíscar.","descricao_completa":"Uma criação unissex de Maison Alhambra. A abertura revela Conhaque, Canela, Fava Tonka; no coração, Avelã, Baunilha, Chocolate; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura doce, amadeirada e oriental.","imagem":"images/maison-alhambra/kismet-angel-magic.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["doce","amadeirado","oriental"],"notas":{"topo":"Conhaque, Canela, Fava Tonka","coracao":"Avelã, Baunilha, Chocolate","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":62,"marca":"Maison Alhambra","nome":"Kismet Men","volume":100,"preco_venda":249,"descricao":"Uma composição masculina com Café, Café e Almíscar.","descricao_completa":"Uma criação masculina de Maison Alhambra. A abertura revela Café, Madeira, Patchouli; no coração, Café, Especiado, Amadeirado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada e oriental.","imagem":"images/maison-alhambra/kismet-men.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental"],"notas":{"topo":"Café, Madeira, Patchouli","coracao":"Café, Especiado, Amadeirado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":63,"marca":"Maison Alhambra","nome":"Kismet Moscow","volume":100,"preco_venda":249,"descricao":"Uma composição masculina com Vodca, Fresco e Almíscar.","descricao_completa":"Uma criação masculina de Maison Alhambra. A abertura revela Vodca, Coentro, Aldeídos; no coração, Fresco, Aquático; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e aquática.","imagem":"images/maison-alhambra/kismet-moscow.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","aquatico"],"notas":{"topo":"Vodca, Coentro, Aldeídos","coracao":"Fresco, Aquático","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":64,"marca":"Maison Alhambra","nome":"Toscano Leather","volume":80,"preco_venda":299,"descricao":"Uma composição unissex com Framboesa, Couro e Almíscar.","descricao_completa":"Uma criação unissex de Maison Alhambra. A abertura revela Framboesa, Couro, Açafrão; no coração, Couro, Floral, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/maison-alhambra/toscano-leather.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Framboesa, Couro, Açafrão","coracao":"Couro, Floral, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":65,"marca":"Maison Alhambra","nome":"Porto Neroli","volume":80,"preco_venda":299,"descricao":"Uma composição unissex com Néroli, Cítrico e Almíscar.","descricao_completa":"Uma criação unissex de Maison Alhambra. A abertura revela Néroli, Limão, Flor Laranjeira; no coração, Cítrico, Floral; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura cítrica, amadeirada e floral.","imagem":"images/maison-alhambra/porto-neroli.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["citrico","amadeirado","floral"],"notas":{"topo":"Néroli, Limão, Flor Laranjeira","coracao":"Cítrico, Floral","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":66,"marca":"Maison Alhambra","nome":"Bright Peach","volume":80,"preco_venda":375,"descricao":"Uma composição unissex com Pêssego, Frutado e Almíscar.","descricao_completa":"Uma criação unissex de Maison Alhambra. A abertura revela Pêssego, Laranja Sanguínea, Mel; no coração, Frutado, Doce; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura frutada, doce e amadeirada.","imagem":"images/maison-alhambra/bright-peach.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["frutado","doce","amadeirado"],"notas":{"topo":"Pêssego, Laranja Sanguínea, Mel","coracao":"Frutado, Doce","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":67,"marca":"Maison Alhambra","nome":"Woody Oud","volume":80,"preco_venda":299,"descricao":"Uma composição unissex com Oud, Amadeirado e Almíscar.","descricao_completa":"Uma criação unissex de Maison Alhambra. A abertura revela Oud, Sândalo, Cardamomo; no coração, Amadeirado, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e especiada.","imagem":"images/maison-alhambra/woody-oud.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","oriental","especiado"],"notas":{"topo":"Oud, Sândalo, Cardamomo","coracao":"Amadeirado, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":68,"marca":"Maison Alhambra","nome":"Tobacco Touch","volume":80,"preco_venda":299.90,"descricao":"Uma composição unissex com Tabaco, Tabaco e Almíscar.","descricao_completa":"Uma criação unissex de Maison Alhambra. A abertura revela Tabaco, Baunilha, Cacau; no coração, Tabaco, Doce, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura doce, amadeirada e oriental.","imagem":"images/maison-alhambra/tobacco-touch.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["doce","amadeirado","oriental"],"notas":{"topo":"Tabaco, Baunilha, Cacau","coracao":"Tabaco, Doce, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":69,"marca":"Maison Alhambra","nome":"Amber \u0026 Leather","volume":100,"preco_venda":309.90,"descricao":"Uma composição unissex com Jasmim, Floral e Almíscar.","descricao_completa":"Uma criação unissex de Maison Alhambra. A abertura revela Jasmim, Couro, Âmbar; no coração, Floral, Couro, Âmbar; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura floral, oriental e amadeirada.","imagem":"images/maison-alhambra/amber-e-leather.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["floral","oriental","amadeirado"],"notas":{"topo":"Jasmim, Couro, Âmbar","coracao":"Floral, Couro, Âmbar","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":70,"marca":"Maison Alhambra","nome":"Victorioso Legend","volume":100,"preco_venda":309.90,"descricao":"Uma composição masculina com Mar, Aquático e Almíscar.","descricao_completa":"Uma criação masculina de Maison Alhambra. A abertura revela Mar, Louro, Âmbar; no coração, Aquático, Amadeirado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e aquática.","imagem":"images/maison-alhambra/victorioso-legend.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","aquatico"],"notas":{"topo":"Mar, Louro, Âmbar","coracao":"Aquático, Amadeirado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":71,"marca":"Maison Alhambra","nome":"Victorioso Myth","volume":100,"preco_venda":309.90,"descricao":"Uma composição masculina com Patchouli, Amadeirado e Almíscar.","descricao_completa":"Uma criação masculina de Maison Alhambra. A abertura revela Patchouli, Cítricos; no coração, Amadeirado, Fresco; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e cítrica.","imagem":"images/maison-alhambra/victorioso-myth.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","citrico"],"notas":{"topo":"Patchouli, Cítricos","coracao":"Amadeirado, Fresco","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":72,"marca":"Maison Alhambra","nome":"Hercules","volume":100,"preco_venda":279.90,"descricao":"Uma composição masculina com Tabaco, Tabaco e Almíscar.","descricao_completa":"Uma criação masculina de Maison Alhambra. A abertura revela Tabaco, Baunilha, Canela; no coração, Tabaco, Doce, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura doce, amadeirada e oriental.","imagem":"images/maison-alhambra/hercules.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["doce","amadeirado","oriental"],"notas":{"topo":"Tabaco, Baunilha, Canela","coracao":"Tabaco, Doce, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":73,"marca":"Maison Alhambra","nome":"Delilah","volume":100,"preco_venda":329.90,"descricao":"Uma composição feminina com Ruibarbo, Floral e Almíscar.","descricao_completa":"Uma criação feminina de Maison Alhambra. A abertura revela Ruibarbo, Rosa, Peônia; no coração, Floral, Frutado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura floral, amadeirada e oriental.","imagem":"images/maison-alhambra/delilah.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["floral","amadeirado","oriental"],"notas":{"topo":"Ruibarbo, Rosa, Peônia","coracao":"Floral, Frutado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":74,"marca":"Maison Alhambra","nome":"Jean Lowe Immortal","volume":100,"preco_venda":289.90,"descricao":"Uma composição masculina com Gengibre, Cítrico e Almíscar.","descricao_completa":"Uma criação masculina de Maison Alhambra. A abertura revela Gengibre, Toronja, Cítricos; no coração, Cítrico, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e cítrica.","imagem":"images/maison-alhambra/jean-lowe-immortal.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","citrico"],"notas":{"topo":"Gengibre, Toronja, Cítricos","coracao":"Cítrico, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":75,"marca":"Maison Alhambra","nome":"Jean Lowe Ombre","volume":100,"preco_venda":339.45,"descricao":"Uma composição unissex com Oud, Oud e Almíscar.","descricao_completa":"Uma criação unissex de Maison Alhambra. A abertura revela Oud, Incenso, Benjoim; no coração, Oud, Especiado, Resinoso; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura oriental e amadeirada.","imagem":"images/maison-alhambra/jean-lowe-ombre.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["oriental","amadeirado"],"notas":{"topo":"Oud, Incenso, Benjoim","coracao":"Oud, Especiado, Resinoso","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":76,"marca":"Rasasi","nome":"Hawas for Men","volume":100,"preco_venda":509.90,"descricao":"Uma composição masculina com Maçã, Aquático e Almíscar.","descricao_completa":"Uma criação masculina de Rasasi. A abertura revela Maçã, Bergamota, Limão, Canela; no coração, Aquático, Ameixa, Flor Laranjeira; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura cítrica, frutada e amadeirada.","imagem":"images/rasasi/hawas-for-men.jpg","tags":["mais-vendido"],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["citrico","frutado","amadeirado"],"notas":{"topo":"Maçã, Bergamota, Limão, Canela","coracao":"Aquático, Ameixa, Flor Laranjeira","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":77,"marca":"Rasasi","nome":"Hawas Ice for Men","volume":100,"preco_venda":469.90,"descricao":"Uma composição masculina com Maçã, Aquático e Almíscar.","descricao_completa":"Uma criação masculina de Rasasi. A abertura revela Maçã, Menta, Cítrico; no coração, Aquático, Fresco, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e cítrica.","imagem":"images/rasasi/hawas-ice-for-men.jpg","tags":["novo"],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","citrico"],"notas":{"topo":"Maçã, Menta, Cítrico","coracao":"Aquático, Fresco, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":78,"marca":"Rasasi","nome":"Hawas for Women","volume":100,"preco_venda":509.90,"descricao":"Uma composição feminina com Romã, Floral e Almíscar.","descricao_completa":"Uma criação feminina de Rasasi. A abertura revela Romã, Íris, Pralinê; no coração, Floral, Doce, Frutado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura floral, doce e amadeirada.","imagem":"images/rasasi/hawas-for-women.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["floral","doce","amadeirado"],"notas":{"topo":"Romã, Íris, Pralinê","coracao":"Floral, Doce, Frutado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":79,"marca":"Rasasi","nome":"La Yuqawam Pour Homme","volume":75,"preco_venda":489.90,"descricao":"Uma composição masculina com Framboesa, Olibano e Almíscar.","descricao_completa":"Uma criação masculina de Rasasi. A abertura revela Framboesa, Açafrão, Tomilho; no coração, Olibano, Jasmim, Artemísia; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/rasasi/la-yuqawam-pour-homme.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Framboesa, Açafrão, Tomilho","coracao":"Olibano, Jasmim, Artemísia","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":80,"marca":"Rasasi","nome":"Shaghaf Pour Homme","volume":100,"preco_venda":509.90,"descricao":"Uma composição masculina com Frutado, Oud e Almíscar.","descricao_completa":"Uma criação masculina de Rasasi. A abertura revela Frutado, Especiado, Couro; no coração, Oud, Floral, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e floral.","imagem":"images/rasasi/shaghaf-pour-homme.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental","floral"],"notas":{"topo":"Frutado, Especiado, Couro","coracao":"Oud, Floral, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":81,"marca":"Rasasi","nome":"Daarej Pour Homme","volume":100,"preco_venda":509.90,"descricao":"Uma composição masculina com Cominho, Especiado e Almíscar.","descricao_completa":"Uma criação masculina de Rasasi. A abertura revela Cominho, Baunilha, Sândalo; no coração, Especiado, Doce, Amadeirado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, doce e oriental.","imagem":"images/rasasi/daarej-pour-homme.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","doce","oriental"],"notas":{"topo":"Cominho, Baunilha, Sândalo","coracao":"Especiado, Doce, Amadeirado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":82,"marca":"Rasasi","nome":"Fattan","volume":50,"preco_venda":439.90,"descricao":"Uma composição masculina com Vetiver, Amadeirado e Almíscar.","descricao_completa":"Uma criação masculina de Rasasi. A abertura revela Vetiver, Toronja, Musgo de Carvalho; no coração, Amadeirado, Fresco; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada e oriental.","imagem":"images/rasasi/fattan.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","oriental"],"notas":{"topo":"Vetiver, Toronja, Musgo de Carvalho","coracao":"Amadeirado, Fresco","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":83,"marca":"Rasasi","nome":"Qasamat Rasana","volume":65,"preco_venda":459.90,"descricao":"Uma composição unissex com Limão, Frutado e Almíscar.","descricao_completa":"Uma criação unissex de Rasasi. A abertura revela Limão, Maçã, Sândalo; no coração, Frutado, Amadeirado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, frutada e oriental.","imagem":"images/rasasi/qasamat-rasana.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","frutado","oriental"],"notas":{"topo":"Limão, Maçã, Sândalo","coracao":"Frutado, Amadeirado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":84,"marca":"Rasasi","nome":"Qasamat Bareeq","volume":65,"preco_venda":459.90,"descricao":"Uma composição unissex com Caramelo, Doce e Almíscar.","descricao_completa":"Uma criação unissex de Rasasi. A abertura revela Caramelo, Açafrão, Couro; no coração, Doce, Especiado, Couro; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura doce, amadeirada e oriental.","imagem":"images/rasasi/qasamat-bareeq.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["doce","amadeirado","oriental"],"notas":{"topo":"Caramelo, Açafrão, Couro","coracao":"Doce, Especiado, Couro","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":85,"marca":"Rasasi","nome":"Al Wisam Day","volume":100,"preco_venda":509.90,"descricao":"Uma composição masculina com Rosa, Floral e Almíscar.","descricao_completa":"Uma criação masculina de Rasasi. A abertura revela Rosa, Gerânio, Lavanda; no coração, Floral, Fresco; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura floral, amadeirada e oriental.","imagem":"images/rasasi/al-wisam-day.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["floral","amadeirado","oriental"],"notas":{"topo":"Rosa, Gerânio, Lavanda","coracao":"Floral, Fresco","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":86,"marca":"Al Haramain","nome":"Amber Oud Gold Edition","volume":60,"preco_venda":389.90,"descricao":"Uma composição unissex com Melão, Âmbar e Almíscar.","descricao_completa":"Uma criação unissex de Al Haramain. A abertura revela Melão, Abacaxi, Frutas Doces; no coração, Âmbar, Oud, Floral; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura oriental, frutada e amadeirada.","imagem":"images/al-haramain/amber-oud-gold-edition.jpg","tags":["mais-vendido"],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["oriental","frutado","amadeirado"],"notas":{"topo":"Melão, Abacaxi, Frutas Doces","coracao":"Âmbar, Oud, Floral","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":87,"marca":"Al Haramain","nome":"Amber Oud Tobacco Edition","volume":null,"preco_venda":389.90,"descricao":"Uma composição unissex com Tabaco, Tabaco e Almíscar.","descricao_completa":"Uma criação unissex de Al Haramain. A abertura revela Tabaco, Cacau, Especiarias; no coração, Tabaco, Oud, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e doce.","imagem":"images/al-haramain/amber-oud-tobacco-edition.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","oriental","doce"],"notas":{"topo":"Tabaco, Cacau, Especiarias","coracao":"Tabaco, Oud, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":88,"marca":"Al Haramain","nome":"Amber Oud Rouge","volume":60,"preco_venda":389.90,"descricao":"Uma composição unissex com Açafrão, Oud e Almíscar.","descricao_completa":"Uma criação unissex de Al Haramain. A abertura revela Açafrão, Âmbar, Cedro; no coração, Oud, Floral, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e floral.","imagem":"images/al-haramain/amber-oud-rouge.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","oriental","floral"],"notas":{"topo":"Açafrão, Âmbar, Cedro","coracao":"Oud, Floral, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":89,"marca":"Al Haramain","nome":"L\u0027Aventure","volume":null,"preco_venda":449.90,"descricao":"Uma composição masculina com Bergamota, Jasmim e Almíscar.","descricao_completa":"Uma criação masculina de Al Haramain. A abertura revela Bergamota, Limão, Verdes; no coração, Jasmim, Lírio, Madeiras; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, floral e cítrica.","imagem":"images/al-haramain/l-aventure.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","floral","citrico"],"notas":{"topo":"Bergamota, Limão, Verdes","coracao":"Jasmim, Lírio, Madeiras","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":90,"marca":"Al Haramain","nome":"Detour Noir","volume":100,"preco_venda":449.90,"descricao":"Uma composição masculina com Maçã, Baunilha e Almíscar.","descricao_completa":"Uma criação masculina de Al Haramain. A abertura revela Maçã, Lavanda, Jasmim, Violeta; no coração, Baunilha, Patchouli, Bergamota; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura floral, amadeirada e doce.","imagem":"images/al-haramain/detour-noir.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["floral","amadeirado","doce"],"notas":{"topo":"Maçã, Lavanda, Jasmim, Violeta","coracao":"Baunilha, Patchouli, Bergamota","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":91,"marca":"Swiss Arabian","nome":"Shaghaf Oud","volume":75,"preco_venda":399.90,"descricao":"Uma composição unissex com Açafrão, Oud e Almíscar.","descricao_completa":"Uma criação unissex de Swiss Arabian. A abertura revela Açafrão, Oud, Rosa; no coração, Oud, Rosa, Pralinê; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e doce.","imagem":"images/swiss-arabian/shaghaf-oud.jpg","tags":["mais-vendido"],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","oriental","doce"],"notas":{"topo":"Açafrão, Oud, Rosa","coracao":"Oud, Rosa, Pralinê","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":92,"marca":"Swiss Arabian","nome":"Shaghaf Oud Tonka","volume":75,"preco_venda":579.90,"descricao":"Uma composição unissex com Tonka, Tonka e Almíscar.","descricao_completa":"Uma criação unissex de Swiss Arabian. A abertura revela Tonka, Amêndoa, Flor Laranjeira; no coração, Tonka, Oud, Floral; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e doce.","imagem":"images/swiss-arabian/shaghaf-oud-tonka.jpg","tags":["novo"],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","oriental","doce"],"notas":{"topo":"Tonka, Amêndoa, Flor Laranjeira","coracao":"Tonka, Oud, Floral","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":93,"marca":"Swiss Arabian","nome":"Casablanca","volume":100,"preco_venda":549.90,"descricao":"Uma composição unissex com Maçã, Patchouli e Almíscar.","descricao_completa":"Uma criação unissex de Swiss Arabian. A abertura revela Maçã, Uva, Caramelo; no coração, Patchouli, Íris, Madeiras; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, doce e floral.","imagem":"images/swiss-arabian/casablanca.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","doce","floral"],"notas":{"topo":"Maçã, Uva, Caramelo","coracao":"Patchouli, Íris, Madeiras","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":94,"marca":"Orientica","nome":"Royal Amber","volume":null,"preco_venda":919.90,"descricao":"Uma composição unissex com Melão, Âmbar e Almíscar.","descricao_completa":"Uma criação unissex de Orientica. A abertura revela Melão, Baunilha, Frutas; no coração, Âmbar, Floral, Doce; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura doce, oriental e frutada.","imagem":"images/orientica/royal-amber.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["doce","oriental","frutado"],"notas":{"topo":"Melão, Baunilha, Frutas","coracao":"Âmbar, Floral, Doce","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":95,"marca":"Orientica","nome":"Oud Saffron","volume":null,"preco_venda":919.90,"descricao":"Uma composição unissex com Açafrão, Oud e Almíscar.","descricao_completa":"Uma criação unissex de Orientica. A abertura revela Açafrão, Baunilha, Oud; no coração, Oud, Especiado, Doce; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, oriental e doce.","imagem":"images/orientica/oud-saffron.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"unissex","familias_olfativas":["amadeirado","oriental","doce"],"notas":{"topo":"Açafrão, Baunilha, Oud","coracao":"Oud, Especiado, Doce","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":96,"marca":"Al Wataniah","nome":"Kayaan Classic","volume":100,"preco_venda":289.90,"descricao":"Uma composição feminina com Íris, Floral e Almíscar.","descricao_completa":"Uma criação feminina de Al Wataniah. A abertura revela Íris, Baunilha, Pralinê; no coração, Floral, Doce, Gourmand; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura doce, floral e amadeirada.","imagem":"images/al-wataniah/kayaan-classic.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["doce","floral","amadeirado"],"notas":{"topo":"Íris, Baunilha, Pralinê","coracao":"Floral, Doce, Gourmand","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":97,"marca":"Al Wataniah","nome":"Sabah Al Ward","volume":100,"preco_venda":289.90,"descricao":"Uma composição feminina com Pimenta Rosa, Floral e Almíscar.","descricao_completa":"Uma criação feminina de Al Wataniah. A abertura revela Pimenta Rosa, Cacau, Florais; no coração, Floral, Doce, Especiado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura floral, doce e amadeirada.","imagem":"images/al-wataniah/sabah-al-ward.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["floral","doce","amadeirado"],"notas":{"topo":"Pimenta Rosa, Cacau, Florais","coracao":"Floral, Doce, Especiado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":98,"marca":"Asdaaf","nome":"Ameerat Al Arab","volume":100,"preco_venda":359.90,"descricao":"Uma composição feminina com Aloe Vera, Floral e Almíscar.","descricao_completa":"Uma criação feminina de Asdaaf. A abertura revela Aloe Vera, Jasmim, Almíscar; no coração, Floral, Fresco; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura floral, amadeirada e oriental.","imagem":"images/asdaaf/ameerat-al-arab.jpg","tags":["mais-vendido"],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["floral","amadeirado","oriental"],"notas":{"topo":"Aloe Vera, Jasmim, Almíscar","coracao":"Floral, Fresco","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":99,"marca":"Ard Al Zaafaran","nome":"Dirham","volume":null,"preco_venda":299.90,"descricao":"Uma composição masculina com Limão, Cítrico e Almíscar.","descricao_completa":"Uma criação masculina de Ard Al Zaafaran. A abertura revela Limão, Lavanda, Sândalo; no coração, Cítrico, Floral, Amadeirado; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, floral e cítrica.","imagem":"images/ard-al-zaafaran/dirham.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"masculino","familias_olfativas":["amadeirado","floral","citrico"],"notas":{"topo":"Limão, Lavanda, Sândalo","coracao":"Cítrico, Floral, Amadeirado","fundo":"Almíscar, Almíscar, Sândalo"}},{"id":100,"marca":"Khadlaj","nome":"Hareem Al Sultan Gold","volume":35,"preco_venda":249.90,"descricao":"Uma composição feminina com Frutas, Floral e Almíscar.","descricao_completa":"Uma criação feminina de Khadlaj. A abertura revela Frutas, Florais, Almíscar; no coração, Floral, Doce; ao fundo, Almíscar, Almíscar, Sândalo. O resultado é uma assinatura amadeirada, floral e oriental.","imagem":"images/khadlaj/hareem-al-sultan-gold.jpg","tags":[],"whatsapp_link":"https://wa.me/","genero":"feminino","familias_olfativas":["amadeirado","floral","oriental"],"notas":{"topo":"Frutas, Florais, Almíscar","coracao":"Floral, Doce","fundo":"Almíscar, Almíscar, Sândalo"}}]
/* CATÁLOGO LOCAL — FIM */;

// Preencha somente com números, incluindo país e DDD. Exemplo: 5511999999999.
const NUMERO_WHATSAPP = "";

const estado = {
  busca: "",
  marca: "todas",
  genero: "todos",
  familia: "todas",
  ordem: "destaques",
};

const MARCAS_PRIORITARIAS = [
  "Lattafa",
  "Rasasi",
  "Al Haramain",
  "Swiss Arabian",
  "Ard Al Zaafaran",
  "Afnan",
  "Armaf",
  "Maison Alhambra",
  "Al Wataniah",
  "Orientica",
  "Asdaaf",
  "Khadlaj",
];

const ROTULOS_GENERO = {
  feminino: "Feminino",
  masculino: "Masculino",
  unissex: "Unissex",
};

const ROTULOS_FAMILIA = {
  doce: "Doce",
  amadeirado: "Amadeirada",
  floral: "Floral",
  oriental: "Oriental",
  citrico: "Cítrica",
  aquatico: "Aquática",
  especiado: "Especiada",
  frutado: "Frutada",
};

const formatoMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

let catalogo = [];
let marcas = [];
let ultimoAcionadorModal = null;

const elementos = {};

// A interface atual é inicializada por site.js. Este arquivo preserva a cópia
// offline do catálogo e as rotinas legadas para compatibilidade dos dados.

async function iniciarSite() {
  mapearElementos();
  prepararEventosGerais();

  try {
    catalogo = await carregarCatalogo();
    marcas = ordenarMarcas([...new Set(catalogo.map((produto) => produto.marca))]);
    montarNavegacaoDeMarcas();
    prepararFiltros();
    aplicarHashInicial();
    atualizarNumerosDoHero();
    renderizarCatalogo();
  } catch (erro) {
    mostrarFalhaDeCarregamento();
    console.error("Não foi possível carregar o catálogo.", erro);
  }
}

function mapearElementos() {
  const ids = [
    "brandNav",
    "brandTabs",
    "brandSelect",
    "searchInput",
    "sortSelect",
    "viewAllButton",
    "genderFilters",
    "familyFilters",
    "resultCount",
    "activeFilterSummary",
    "catalogSections",
    "emptyState",
    "emptyResetButton",
    "heroProductCount",
    "heroBrandCount",
    "productModal",
    "modalClose",
    "modalMedia",
    "modalImage",
    "modalBrand",
    "modalGender",
    "modalTitle",
    "modalTags",
    "modalDescription",
    "modalTopNotes",
    "modalHeartNotes",
    "modalBaseNotes",
    "modalVolume",
    "modalFamilies",
    "modalRetailPrice",
    "modalBuyButton",
    "backToTop",
    "currentYear",
  ];

  ids.forEach((id) => {
    elementos[id] = document.getElementById(id);
  });
}

async function carregarCatalogo() {
  if (window.location.protocol !== "file:") {
    try {
      const resposta = await fetch("perfumes.json", { cache: "no-store" });
      if (!resposta.ok) throw new Error(`Resposta ${resposta.status}`);
      const dados = await resposta.json();
      return validarCatalogo(dados);
    } catch (erro) {
      console.warn("Usando a cópia local do catálogo.", erro);
    }
  }

  return validarCatalogo(CATALOGO_LOCAL);
}

function validarCatalogo(dados) {
  if (!Array.isArray(dados) || dados.length === 0) {
    throw new Error("Catálogo vazio.");
  }

  return dados.filter((produto) =>
    produto &&
    Number.isFinite(Number(produto.id)) &&
    typeof produto.nome === "string" &&
    typeof produto.marca === "string" &&
    Number.isFinite(Number(produto.preco_venda)),
  );
}

function ordenarMarcas(lista) {
  const prioridade = new Map(MARCAS_PRIORITARIAS.map((marca, indice) => [marca, indice]));
  return lista.sort((a, b) => {
    const posicaoA = prioridade.has(a) ? prioridade.get(a) : Number.MAX_SAFE_INTEGER;
    const posicaoB = prioridade.has(b) ? prioridade.get(b) : Number.MAX_SAFE_INTEGER;
    return posicaoA - posicaoB || a.localeCompare(b, "pt-BR");
  });
}

function montarNavegacaoDeMarcas() {
  elementos.brandNav.replaceChildren();
  elementos.brandTabs.replaceChildren();
  elementos.brandSelect.replaceChildren();

  const todasNav = criarLinkDeMarca("Todas as marcas", "todas", "catalogo");
  elementos.brandNav.append(todasNav);
  elementos.brandTabs.append(criarBotaoDeMarca("Todas", "todas"));
  elementos.brandSelect.append(criarOpcao("todas", "Todas as marcas"));

  marcas.forEach((marca) => {
    const slug = slugificar(marca);
    elementos.brandNav.append(criarLinkDeMarca(marca, slug, slug));
    elementos.brandTabs.append(criarBotaoDeMarca(marca, slug));
    elementos.brandSelect.append(criarOpcao(slug, marca));
  });
}

function criarLinkDeMarca(rotulo, valor, destino) {
  const link = criarElemento("a", "", rotulo);
  link.href = `#${destino}`;
  link.dataset.brandLink = valor;
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    selecionarMarca(valor, true);
  });
  return link;
}

function criarBotaoDeMarca(rotulo, valor) {
  const botao = criarElemento("button", "", rotulo);
  botao.type = "button";
  botao.dataset.brandTab = valor;
  botao.setAttribute("aria-pressed", valor === "todas" ? "true" : "false");
  botao.addEventListener("click", () => selecionarMarca(valor, true));
  return botao;
}

function criarOpcao(valor, rotulo) {
  const opcao = document.createElement("option");
  opcao.value = valor;
  opcao.textContent = rotulo;
  return opcao;
}

function prepararFiltros() {
  elementos.searchInput.addEventListener("input", () => {
    estado.busca = elementos.searchInput.value.trim();
    renderizarCatalogo();
  });

  elementos.brandSelect.addEventListener("change", () => {
    selecionarMarca(elementos.brandSelect.value, false);
  });

  elementos.sortSelect.addEventListener("change", () => {
    estado.ordem = elementos.sortSelect.value;
    renderizarCatalogo();
  });

  elementos.genderFilters.querySelectorAll("[data-gender]").forEach((botao) => {
    botao.addEventListener("click", () => {
      estado.genero = botao.dataset.gender;
      renderizarCatalogo();
    });
  });

  elementos.familyFilters.querySelectorAll("[data-family]").forEach((botao) => {
    botao.addEventListener("click", () => {
      estado.familia = botao.dataset.family;
      renderizarCatalogo();
    });
  });

  document.querySelectorAll("[data-footer-gender]").forEach((botao) => {
    botao.addEventListener("click", () => {
      limparFiltros(false);
      estado.genero = botao.dataset.footerGender;
      renderizarCatalogo();
      rolarAte("catalogo");
    });
  });

  elementos.viewAllButton.addEventListener("click", () => limparFiltros(true));
  elementos.emptyResetButton.addEventListener("click", () => limparFiltros(true));
}

function prepararEventosGerais() {
  elementos.currentYear.textContent = String(new Date().getFullYear());
  atualizarLinksGeraisDoWhatsApp();
  elementos.modalClose.addEventListener("click", fecharModal);
  elementos.productModal.addEventListener("close", aoFecharModal);
  elementos.productModal.addEventListener("click", (evento) => {
    if (evento.target !== elementos.productModal) return;
    const caixa = elementos.productModal.getBoundingClientRect();
    const fora = evento.clientX < caixa.left || evento.clientX > caixa.right || evento.clientY < caixa.top || evento.clientY > caixa.bottom;
    if (fora) fecharModal();
  });

  elementos.backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: respeitaMovimentoReduzido() ? "auto" : "smooth" });
  });

  window.addEventListener("scroll", () => {
    elementos.backToTop.classList.toggle("is-visible", window.scrollY > 650);
  }, { passive: true });
}

function aplicarHashInicial() {
  const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (hash && marcas.some((marca) => slugificar(marca) === hash)) {
    estado.marca = hash;
  }
}

function atualizarNumerosDoHero() {
  elementos.heroProductCount.textContent = String(catalogo.length);
  elementos.heroBrandCount.textContent = String(marcas.length);
}

function selecionarMarca(valor, rolar) {
  estado.marca = valor;
  estado.busca = "";
  elementos.searchInput.value = "";
  renderizarCatalogo();

  const destino = valor === "todas" ? "catalogo" : valor;
  try {
    window.history.replaceState(null, "", `#${destino}`);
  } catch {
    // A navegação continua funcional mesmo quando o navegador limita o histórico local.
  }

  if (rolar) requestAnimationFrame(() => rolarAte(destino));
}

function limparFiltros(rolar) {
  Object.assign(estado, {
    busca: "",
    marca: "todas",
    genero: "todos",
    familia: "todas",
    ordem: "destaques",
  });

  elementos.searchInput.value = "";
  elementos.brandSelect.value = "todas";
  elementos.sortSelect.value = "destaques";
  renderizarCatalogo();

  try {
    window.history.replaceState(null, "", "#catalogo");
  } catch {
    // Sem impacto para os filtros.
  }

  if (rolar) rolarAte("catalogo");
}

function renderizarCatalogo() {
  elementos.catalogSections.setAttribute("aria-busy", "true");
  const produtos = obterProdutosFiltrados();
  elementos.catalogSections.replaceChildren();

  if (produtos.length === 0) {
    elementos.catalogSections.hidden = true;
    elementos.emptyState.hidden = false;
  } else {
    elementos.catalogSections.hidden = false;
    elementos.emptyState.hidden = true;
    criarSecoesPorMarca(produtos).forEach((secao) => elementos.catalogSections.append(secao));
  }

  atualizarControlesAtivos();
  atualizarResumo(produtos.length);
  elementos.catalogSections.setAttribute("aria-busy", "false");
}

function obterProdutosFiltrados() {
  const termo = normalizar(estado.busca);
  const filtrados = catalogo.filter((produto) => {
    const atendeBusca = !termo || normalizar(produto.nome).includes(termo);
    const atendeMarca = estado.marca === "todas" || slugificar(produto.marca) === estado.marca;
    const atendeGenero = estado.genero === "todos" || produto.genero === estado.genero;
    const familiasProduto = Array.isArray(produto.familias_olfativas) ? produto.familias_olfativas : [];
    const atendeFamilia = estado.familia === "todas" || familiasProduto.includes(estado.familia);
    return atendeBusca && atendeMarca && atendeGenero && atendeFamilia;
  });

  return filtrados.sort((a, b) => {
    if (estado.ordem === "preco-asc") return Number(a.preco_venda) - Number(b.preco_venda);
    if (estado.ordem === "preco-desc") return Number(b.preco_venda) - Number(a.preco_venda);
    if (estado.ordem === "nome") return a.nome.localeCompare(b.nome, "pt-BR", { sensitivity: "base" });
    return pontuacaoDestaque(a) - pontuacaoDestaque(b) || Number(a.id) - Number(b.id);
  });
}

function pontuacaoDestaque(produto) {
  const tags = Array.isArray(produto.tags) ? produto.tags : [];
  if (tags.includes("mais-vendido")) return 0;
  if (tags.includes("novo")) return 1;
  return 2;
}

function criarSecoesPorMarca(produtos) {
  const modoResultados = estado.marca === "todas" && (
    Boolean(estado.busca) ||
    estado.genero !== "todos" ||
    estado.familia !== "todas" ||
    estado.ordem !== "destaques"
  );

  if (modoResultados) {
    const secao = criarElemento("section", "brand-section results-section");
    secao.id = "resultados";
    secao.setAttribute("aria-labelledby", "titulo-resultados");
    const cabecalho = criarElemento("div", "brand-section-header");
    const tituloWrap = criarElemento("div");
    const titulo = criarElemento("h2", "", "Seleção encontrada");
    titulo.id = "titulo-resultados";
    tituloWrap.append(titulo, criarElemento("span", "brand-count", `${produtos.length} ${produtos.length === 1 ? "fragrância" : "fragrâncias"}`));
    cabecalho.append(tituloWrap);
    const grade = criarElemento("div", "product-grid");
    produtos.forEach((produto) => grade.append(criarCardProduto(produto)));
    secao.append(cabecalho, grade);
    return [secao];
  }

  return marcas
    .map((marca) => ({ marca, produtos: produtos.filter((produto) => produto.marca === marca) }))
    .filter((grupo) => grupo.produtos.length)
    .map(({ marca, produtos: produtosDaMarca }) => {
      const slug = slugificar(marca);
      const secao = criarElemento("section", "brand-section");
      secao.id = slug;
      secao.setAttribute("aria-labelledby", `titulo-${slug}`);

      const cabecalho = criarElemento("div", "brand-section-header");
      const tituloWrap = criarElemento("div");
      const titulo = criarElemento("h2", "", marca);
      titulo.id = `titulo-${slug}`;
      const quantidade = criarElemento("span", "brand-count", `${produtosDaMarca.length} ${produtosDaMarca.length === 1 ? "fragrância" : "fragrâncias"}`);
      tituloWrap.append(titulo, quantidade);
      cabecalho.append(tituloWrap);

      if (estado.marca === "todas") {
        const verColecao = criarElemento("a", "", "Ver somente esta coleção");
        verColecao.href = `#${slug}`;
        verColecao.addEventListener("click", (evento) => {
          evento.preventDefault();
          selecionarMarca(slug, true);
        });
        cabecalho.append(verColecao);
      }

      const grade = criarElemento("div", "product-grid");
      produtosDaMarca.forEach((produto) => grade.append(criarCardProduto(produto)));
      secao.append(cabecalho, grade);
      return secao;
    });
}

function criarCardProduto(produto) {
  const card = criarElemento("article", "product-card");
  card.dataset.productId = String(produto.id);

  const badge = criarBadge(produto);
  if (badge) card.append(badge);

  const botaoImagem = criarElemento("button", "product-media-button");
  botaoImagem.type = "button";
  botaoImagem.setAttribute("aria-label", `Ver detalhes de ${produto.nome}`);
  const midia = criarMidiaProduto(produto, "card");
  botaoImagem.append(midia);
  botaoImagem.addEventListener("click", () => abrirModal(produto, botaoImagem));

  const conteudo = criarElemento("div", "product-content");
  const sobrelinha = criarElemento("div", "product-overline");
  sobrelinha.append(
    criarElemento("span", "", produto.marca),
    criarElemento("span", "", textoVolume(produto.volume)),
  );

  const botaoTitulo = criarElemento("button", "product-title-button");
  botaoTitulo.type = "button";
  botaoTitulo.setAttribute("aria-label", `Abrir detalhes de ${produto.nome}`);
  botaoTitulo.append(criarElemento("h3", "", produto.nome));
  botaoTitulo.addEventListener("click", () => abrirModal(produto, botaoTitulo));

  const familias = criarElemento("p", "product-family", textoFamilias(produto.familias_olfativas));
  const descricao = criarElemento("p", "product-description", produto.descricao);
  const precos = criarElemento("div", "product-prices");
  const varejo = criarElemento("div");
  varejo.append(criarElemento("small", "", "Preço de varejo"), criarElemento("strong", "", formatoMoeda.format(produto.preco_venda)));
  precos.append(varejo);

  const acoes = criarElemento("div", "product-actions");
  const detalhes = criarElemento("button", "button button--outline", "Ver detalhes");
  detalhes.type = "button";
  detalhes.addEventListener("click", () => abrirModal(produto, detalhes));
  const comprar = criarElemento("a", "button button--gold", "Comprar");
  comprar.href = criarLinkWhatsApp(produto);
  comprar.target = "_blank";
  comprar.rel = "noopener noreferrer";
  comprar.setAttribute("aria-label", `Comprar ${produto.nome} pelo WhatsApp`);
  acoes.append(detalhes, comprar);

  conteudo.append(sobrelinha, botaoTitulo, familias, descricao, precos, acoes);
  card.append(botaoImagem, conteudo);
  return card;
}

function criarMidiaProduto(produto, contexto) {
  const midia = criarElemento("div", `product-media product-media--${contexto}`);
  const placeholder = criarElemento("div", "perfume-placeholder");
  placeholder.setAttribute("aria-hidden", "true");
  const frasco = criarElemento("span", "bottle-icon");
  frasco.append(document.createElement("i"));
  placeholder.append(frasco, criarElemento("small", "", "Imagem em breve"));

  const imagem = document.createElement("img");
  imagem.src = produto.imagem;
  imagem.alt = produto.nome;
  imagem.loading = contexto === "card" ? "lazy" : "eager";
  imagem.width = 600;
  imagem.height = 600;
  imagem.addEventListener("load", () => midia.classList.add("is-loaded"), { once: true });
  imagem.addEventListener("error", () => midia.classList.remove("is-loaded"), { once: true });

  midia.append(placeholder, imagem);
  if (imagem.complete && imagem.naturalWidth > 0) midia.classList.add("is-loaded");
  return midia;
}

function criarBadge(produto) {
  const tags = Array.isArray(produto.tags) ? produto.tags : [];
  if (tags.includes("mais-vendido")) return criarElemento("span", "badge badge--best-seller", "Mais vendido");
  if (tags.includes("novo")) return criarElemento("span", "badge badge--new", "Novo");
  return null;
}

function abrirModal(produto, acionador) {
  ultimoAcionadorModal = acionador;
  elementos.modalBrand.textContent = produto.marca;
  elementos.modalGender.textContent = ROTULOS_GENERO[produto.genero] || produto.genero;
  elementos.modalTitle.textContent = produto.nome;
  elementos.modalDescription.textContent = produto.descricao_completa || produto.descricao;
  elementos.modalTopNotes.textContent = produto.notas?.topo || "Consulte a composição";
  elementos.modalHeartNotes.textContent = produto.notas?.coracao || "Consulte a composição";
  elementos.modalBaseNotes.textContent = produto.notas?.fundo || "Consulte a composição";
  elementos.modalVolume.textContent = `Volume: ${textoVolume(produto.volume)}`;
  elementos.modalFamilies.textContent = `Famílias olfativas: ${textoFamilias(produto.familias_olfativas)}`;
  elementos.modalRetailPrice.textContent = formatoMoeda.format(produto.preco_venda);
  elementos.modalBuyButton.href = criarLinkWhatsApp(produto);

  elementos.modalTags.replaceChildren();
  const badge = criarBadge(produto);
  if (badge) elementos.modalTags.append(badge);

  elementos.modalMedia.classList.remove("is-loaded");
  elementos.modalImage.src = produto.imagem;
  elementos.modalImage.alt = produto.nome;
  elementos.modalImage.onload = () => elementos.modalMedia.classList.add("is-loaded");
  elementos.modalImage.onerror = () => elementos.modalMedia.classList.remove("is-loaded");

  document.body.classList.add("modal-open");
  elementos.productModal.showModal();
  elementos.modalClose.focus();
}

function fecharModal() {
  if (elementos.productModal.open) elementos.productModal.close();
}

function aoFecharModal() {
  document.body.classList.remove("modal-open");
  if (ultimoAcionadorModal?.isConnected) ultimoAcionadorModal.focus();
  ultimoAcionadorModal = null;
}

function criarLinkWhatsApp(produto) {
  const mensagem = `Olá! Tenho interesse no ${produto.nome}`;
  let url;
  const numero = NUMERO_WHATSAPP.replace(/\D/g, "");
  try {
    url = new URL(numero ? `https://wa.me/${numero}` : (produto.whatsapp_link || "https://wa.me/"));
  } catch {
    url = new URL("https://wa.me/");
  }
  url.searchParams.set("text", mensagem);
  return url.toString();
}

function atualizarLinksGeraisDoWhatsApp() {
  const numero = NUMERO_WHATSAPP.replace(/\D/g, "");
  if (!numero) return;

  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
    try {
      const atual = new URL(link.href);
      const destino = new URL(`https://wa.me/${numero}`);
      const mensagem = atual.searchParams.get("text");
      if (mensagem) destino.searchParams.set("text", mensagem);
      link.href = destino.toString();
    } catch {
      // Mantém o endereço original caso o navegador rejeite a atualização.
    }
  });
}

function atualizarControlesAtivos() {
  elementos.brandSelect.value = estado.marca;
  elementos.sortSelect.value = estado.ordem;

  document.querySelectorAll("[data-brand-link]").forEach((link) => {
    const ativo = link.dataset.brandLink === estado.marca;
    link.classList.toggle("is-active", ativo);
    if (ativo) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  document.querySelectorAll("[data-brand-tab]").forEach((botao) => {
    const ativo = botao.dataset.brandTab === estado.marca;
    botao.classList.toggle("is-active", ativo);
    botao.setAttribute("aria-pressed", String(ativo));
  });

  elementos.genderFilters.querySelectorAll("[data-gender]").forEach((botao) => {
    const ativo = botao.dataset.gender === estado.genero;
    botao.classList.toggle("is-active", ativo);
    botao.setAttribute("aria-pressed", String(ativo));
  });

  elementos.familyFilters.querySelectorAll("[data-family]").forEach((botao) => {
    const ativo = botao.dataset.family === estado.familia;
    botao.classList.toggle("is-active", ativo);
    botao.setAttribute("aria-pressed", String(ativo));
  });
}

function atualizarResumo(quantidade) {
  elementos.resultCount.textContent = `${quantidade} ${quantidade === 1 ? "perfume encontrado" : "perfumes encontrados"}`;
  const partes = [];
  if (estado.marca !== "todas") partes.push(marcaPorSlug(estado.marca));
  if (estado.genero !== "todos") partes.push(ROTULOS_GENERO[estado.genero]);
  if (estado.familia !== "todas") partes.push(ROTULOS_FAMILIA[estado.familia]);
  if (estado.busca) partes.push(`Busca: “${estado.busca}”`);
  elementos.activeFilterSummary.textContent = partes.length ? partes.filter(Boolean).join(" · ") : "Todos os perfumes";
}

function mostrarFalhaDeCarregamento() {
  elementos.catalogSections.hidden = true;
  elementos.emptyState.hidden = false;
  elementos.emptyState.querySelector("h3").textContent = "Não foi possível abrir a coleção";
  elementos.emptyState.querySelector("p").textContent = "Recarregue a página. Se o problema continuar, confira se app.js está na mesma pasta do index.html.";
  elementos.emptyResetButton.hidden = true;
  elementos.resultCount.textContent = "Catálogo indisponível";
}

function textoVolume(volume) {
  return Number(volume) > 0 ? `${Number(volume)} ml` : "Volume sob consulta";
}

function textoFamilias(familias) {
  if (!Array.isArray(familias) || familias.length === 0) return "Família oriental";
  return familias.map((familia) => ROTULOS_FAMILIA[familia] || familia).join(" · ");
}

function marcaPorSlug(slug) {
  return marcas.find((marca) => slugificar(marca) === slug) || "";
}

function rolarAte(id) {
  const alvo = document.getElementById(id);
  if (alvo) alvo.scrollIntoView({ behavior: respeitaMovimentoReduzido() ? "auto" : "smooth", block: "start" });
}

function respeitaMovimentoReduzido() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function normalizar(valor) {
  return String(valor ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function slugificar(valor) {
  return normalizar(valor)
    .replace(/&/g, " e ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function criarElemento(tag, classe = "", texto = "") {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  if (texto !== "") elemento.textContent = texto;
  return elemento;
}
