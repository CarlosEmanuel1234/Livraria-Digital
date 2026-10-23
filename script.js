const livros = [
  {
    id: 1,
    titulo: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    categoria: 'Fantasia',
    ano: 1937,
    preco: 39.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkguJCDNbINg2LnYLtfKqQkqal26SDzeWg7O31LdApPA&s=10',
    descricao: 'Uma aventura pela Terra-média.',
  },
  {
    id: 2,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    categoria: 'Romance',
    ano: 1899,
    preco: 24.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMt76j895jT-kC3Kdtqr9kqqfUuXa9z8rQNZuJt3aUrw&s=10',
    descricao: 'Um clássico da literatura brasileira.',
  },
  {
    id: 3,
    titulo: 'Harry Potter',
    autor: 'J. K. Rowling',
    categoria: 'Fantasia',
    ano: 1997,
    preco: 49.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQrMMRa-t_DSkpMRNTwcxg3wf55y55DbOS_lk1Hp0T5A&s=10',
    descricao: 'Uma história de magia e amizade.',
  },
  {
    id: 4,
    titulo: 'Código Limpo',
    autor: 'Robert C. Martin',
    categoria: 'Tecnologia',
    ano: 2008,
    preco: 59.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU677vraN3aunoCVdIKWMtfephLfBXU0XUa5tj4EFlrQ&s=10',
    descricao: 'Práticas para escrever código organizado.',
  },
  {
    id: 5,
    titulo: 'A Culpa é das Estrelas',
    autor: 'John Green',
    categoria: 'Romance',
    ano: 2012,
    preco: 34.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkO4o5J41_fyf3nFY6X3S1tf9B55nkjEFzq3SVsM8POw&s=10',
    descricao: 'Uma história de amor e descobertas.',
  },
  {
    id: 6,
    titulo: 'Entendendo Algoritmos',
    autor: 'Aditya Bhargava',
    categoria: 'Tecnologia',
    ano: 2016,
    preco: 54.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHu0Rxt5LbtR30LtBUxJoK_VLJ-ep99J1hTiKALRSGxg&s=10',
    descricao: 'Aprenda algoritmos de maneira visual.',
  },
  {
    id: 7,
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    categoria: 'Fantasia',
    ano: 1943,
    preco: 29.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5S5fY7SkwqOp6uh51uoNIrYAa0H02LQyhRgGDd6q9A&s=10',
    descricao: 'Uma história sobre amizade e amor.',
  },
  {
    id: 8,
    titulo: '1984',
    autor: 'George Orwell',
    categoria: 'Romance',
    ano: 1949,
    preco: 32.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo9AsqtmBeIHQmWa_b99yRSZ3LDv0HpGS1uGIHAFpw4w&s=10',
    descricao: 'Um romance sobre vigilância e controle.',
  },
  {
    id: 9,
    titulo: 'O Programador Pragmático',
    autor: 'Andrew Hunt e David Thomas',
    categoria: 'Tecnologia',
    ano: 1999,
    preco: 64.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidx6z-uHMCKjmnrDRaGQYHwEBJuGN1FWQ163OCJHObA&s=10',
    descricao: 'Conselhos para desenvolver software melhor.',
  },
  {
    id: 10,
    titulo: 'Orgulho e Preconceito',
    autor: 'Jane Austen',
    categoria: 'Romance',
    ano: 1813,
    preco: 27.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8Ca_zx_g6NNNziPyv5JdCLy2ljL9fj8S53SaFIPURQ&s',
    descricao: 'Um clássico sobre relacionamentos e sociedade.',
  },
  {
    id: 11,
    titulo: 'O Senhor dos Anéis',
    autor: 'J. R. R. Tolkien',
    categoria: 'Fantasia',
    ano: 1954,
    preco: 69.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fPRI-8I3AkjCvzaizhqUbu8W_VG93eHax83Cf1qixw&s=10',
    descricao: 'Uma grande jornada para salvar a Terra-média.',
  },
  {
    id: 12,
    titulo: 'JavaScript',
    autor: 'David Flanagan',
    categoria: 'Tecnologia',
    ano: 2020,
    preco: 74.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJ5sFaNQSoCu_kf7QczgH1YiBlhb19vHdShDRc9vKCQ&s=10',
    descricao: 'Um guia de referência da linguagem JavaScript.',
  },
  {
    id: 13,
    titulo: 'Jurassic Park',
    autor: 'Michael Crichton',
    categoria: 'Terror',
    ano: 1990,
    preco: 75.68,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0iziNTUqKYAT4nlxJ4NZjDjGrUWbfRM2h6tJXsPmS8g&s=10',
    descricao:
      'é um romance de ficção científica e tecno-thriller escrito por Michael Crichton e lançado originalmente em 1990.',
  },
  {
    id: 13,
    titulo: 'O Gato Preto',
    autor: 'Edgar Allan Poe',
    categoria: 'Terror',
    ano: 1990,
    preco: 49.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUKRcEyE8IqQKznEkoKTB7gi2h9gDkeXrvup2_1-B9Q&s=10',
    descricao:
      'é uma coletânea que reúne sete das mais emblemáticas e assustadoras histórias de terror e do sobrenatural escritas por Edgar Allan Poe',
  },
  {
    id: 14,
    titulo: 'Inteligência Emocional',
    autor: 'Daniel Goleman',
    categoria: 'Psicologia',
    ano: 1995,
    preco: 29.35,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSESEpUxzIK_z9iWjD93qNxrEZI2gS3VQE5cF572tT3oQ&s',
    descricao:
      'redefiniu o conceito de inteligência ao provar que o quociente emocional (QE) é tão ou mais importante para o sucesso humano do que o tradicional quociente de inteligência (QI).',
  },
  {
    id: 15,
    titulo: 'Biblia Sagrada',
    categoria: 'Religioso',
    preco: 50.0,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9PtsrCmApLtI08hRb5NeW58ARfYb8Bs_KeYmh3visA&s=10',
    descricao:
      'é a coleção de livros sagrados considerada a Palavra de Deus pelas religiões cristã e judaica.',
  },
  {
    id: 16,
    titulo: 'the psychology of money ',
    autor: ' Morgan Housel',
    categoria: 'Psicologia',
    ano: 2020,
    preco: 111.0,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4e8GZDve-S3E7Z9MWbnBg6DxpIBHTSNmmSdMV6wip4g&s=10',
    descricao:
      'demonstra que o sucesso financeiro depende muito mais de como você se comporta do que de sua inteligência ou conhecimentos matemáticos.',
  },
  {
    id: 17,
    titulo: 'Coraline',
    autor: 'Neil Gaiman',
    categoria: 'Fantasia',
    ano: 2002,
    preco: 99.34,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJXhzjkl7TaG8w-Yj6snpgW40aI9cs31GDYaOLnx5plPcdJ4v5A_yiMs&s=10',
    descricao:
      'A obra é uma novela de fantasia sombria e terror infantojuvenil. A história acompanha Coraline Jones, uma garota muito curiosa, inteligente e de espírito aventureiro.',
  },
];

const catalogo = document.getElementById('catalogo');
const pesquisa = document.getElementById('pesquisa');
const contador = document.getElementById('contador');
const areaCarrinho = document.getElementById('itens-carrinho');
const totalCarrinho = document.getElementById('total-carrinho');
const checkout = document.getElementById('checkout');

let categoriaAtual = 'Todos';
let carrinho = [];

function moeda(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function renderizarLivros() {
  const termo = pesquisa.value.toLowerCase().trim();

  const encontrados = livros.filter((livro) => {
    const combinaTexto =
      livro.titulo.toLowerCase().includes(termo) ||
      livro.autor.toLowerCase().includes(termo);

    const combinaCategoria =
      categoriaAtual === 'Todos' || livro.categoria === categoriaAtual;

    return combinaTexto && combinaCategoria;
  });

  catalogo.replaceChildren();
  contador.textContent = `${encontrados.length} livro(s) encontrado(s)`;

  encontrados.forEach((livro) => {
    const card = document.createElement('article');
    card.className = 'livro';

    const imagem = document.createElement('img');
    imagem.className = 'capa';
    imagem.src = livro.capa;
    imagem.alt = `Capa de ${livro.titulo}`;
    imagem.loading = 'lazy';

    imagem.onerror = () => {
      imagem.onerror = null;
      imagem.src = 'https://placehold.co/300x400/e8ece9/25332e?text=Livro';
    };

    const info = document.createElement('div');
    info.className = 'livro-info';

    const titulo = document.createElement('h3');
    titulo.textContent = livro.titulo;

    const autor = document.createElement('p');
    autor.className = 'autor';
    autor.textContent = livro.autor;

    const categoria = document.createElement('p');
    categoria.className = 'categoria';
    categoria.textContent = livro.categoria;

    const ano = document.createElement('p');
    ano.textContent = `Ano: ${livro.ano}`;

    // O preço é criado e adicionado diretamente ao card.
    const preco = document.createElement('p');
    preco.className = 'preco-livro';
    preco.textContent = moeda(livro.preco);

    const detalhes = document.createElement('button');
    detalhes.className = 'botao-limpar';
    detalhes.textContent = 'Ver detalhes';

    detalhes.addEventListener('click', () => {
      alert(
        `${livro.titulo}\n\n` +
          `Autor: ${livro.autor}\n` +
          `Categoria: ${livro.categoria}\n` +
          `Ano: ${livro.ano}\n` +
          `Preço: ${moeda(livro.preco)}\n\n` +
          livro.descricao
      );
    });

    const adicionar = document.createElement('button');
    adicionar.className = 'botao-adicionar';
    adicionar.textContent = 'Adicionar ao carrinho';

    adicionar.addEventListener('click', () => {
      adicionarAoCarrinho(livro.id);
    });

    info.append(titulo, autor, categoria, ano, preco, adicionar, detalhes);

    card.append(imagem, info);
    catalogo.appendChild(card);
  });
}

function adicionarAoCarrinho(id) {
  const livro = livros.find((item) => item.id === id);
  if (!livro) return;

  const item = carrinho.find((item) => item.id === id);

  if (item) {
    item.quantidade++;
  } else {
    carrinho.push({
      id: livro.id,
      titulo: livro.titulo,
      preco: livro.preco,
      quantidade: 1,
    });
  }

  atualizarCarrinho();
}

function atualizarCarrinho() {
  areaCarrinho.replaceChildren();

  carrinho.forEach((item) => {
    const linha = document.createElement('div');
    linha.className = 'item-carrinho';

    const descricao = document.createElement('span');
    descricao.textContent = `${item.titulo} — ${moeda(item.preco)} cada`;

    const controles = document.createElement('div');
    controles.className = 'controles-item';

    const diminuir = document.createElement('button');
    diminuir.textContent = '−';
    diminuir.setAttribute('aria-label', `Diminuir ${item.titulo}`);

    diminuir.addEventListener('click', () => {
      item.quantidade--;

      if (item.quantidade <= 0) {
        carrinho = carrinho.filter((produto) => produto.id !== item.id);
      }

      atualizarCarrinho();
    });

    const quantidade = document.createElement('span');
    quantidade.textContent = item.quantidade;

    const aumentar = document.createElement('button');
    aumentar.textContent = '+';
    aumentar.setAttribute('aria-label', `Aumentar ${item.titulo}`);

    aumentar.addEventListener('click', () => {
      item.quantidade++;
      atualizarCarrinho();
    });

    const subtotal = document.createElement('strong');
    subtotal.textContent = moeda(item.preco * item.quantidade);

    controles.append(diminuir, quantidade, aumentar, subtotal);
    linha.append(descricao, controles);
    areaCarrinho.appendChild(linha);
  });

  if (carrinho.length === 0) {
    const vazio = document.createElement('p');
    vazio.textContent = 'Seu carrinho está vazio.';
    areaCarrinho.appendChild(vazio);
  }

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  totalCarrinho.textContent = moeda(total);
}

document.querySelectorAll('.filtro').forEach((botao) => {
  botao.addEventListener('click', () => {
    categoriaAtual = botao.dataset.categoria;

    document.querySelectorAll('.filtro').forEach((item) => {
      item.classList.remove('ativo');
    });

    botao.classList.add('ativo');
    renderizarLivros();
  });
});

pesquisa.addEventListener('input', renderizarLivros);

document.getElementById('limpar-carrinho').addEventListener('click', () => {
  carrinho = [];
  atualizarCarrinho();
});

document.getElementById('finalizar-compra').addEventListener('click', () => {
  if (carrinho.length === 0) {
    alert('Adicione pelo menos um livro ao carrinho.');
    return;
  }

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  const resumo = document.getElementById('resumo-checkout');
  resumo.replaceChildren();

  carrinho.forEach((item) => {
    const linha = document.createElement('p');
    linha.textContent =
      `${item.titulo} × ${item.quantidade}: ` +
      moeda(item.preco * item.quantidade);
    resumo.appendChild(linha);
  });

  const valorTotal = document.createElement('h3');
  valorTotal.textContent = `Total: ${moeda(total)}`;
  resumo.appendChild(valorTotal);

  checkout.showModal();
});

document
  .getElementById('fechar-checkout')
  .addEventListener('click', () => checkout.close());

document.getElementById('form-checkout').addEventListener('submit', (event) => {
  event.preventDefault();

  if (carrinho.length === 0) {
    checkout.close();
    alert('Seu carrinho está vazio.');
    return;
  }

  const nome = document.getElementById('nome').value.trim();
  const pagamento = document.getElementById('pagamento').value;

  if (!nome || !pagamento) return;

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  alert(
    'PEDIDO DE DEMONSTRAÇÃO\n\n' +
      `Cliente: ${nome}\n` +
      `Pagamento: ${pagamento}\n` +
      `Total: ${moeda(total)}\n\n` +
      'Nenhum pagamento real foi efetuado.'
  );

  checkout.close();
  carrinho = [];
  atualizarCarrinho();
  event.target.reset();
});

renderizarLivros();
atualizarCarrinho();

const detalhesPagamento = document.getElementById('detalhes-pagamento');

// Mostra os campos de acordo com a forma escolhida.
document.querySelectorAll('input[name="metodo"]').forEach((opcao) => {
  opcao.addEventListener('change', () => {
    detalhesPagamento.replaceChildren();

    if (opcao.value === 'pix' && opcao.checked) {
      const titulo = document.createElement('h3');
      titulo.textContent = 'Pague com Pix';

      const aviso = document.createElement('p');
      aviso.textContent =
        'QR Code ilustrativo para demonstração acadêmica. ' +
        'Não realiza pagamentos.';

      const qr = document.createElement('img');
      qr.alt = 'QR Code demonstrativo';
      qr.width = 220;
      qr.height = 220;

      // Gera um QR Code visual de demonstração.
      // O conteúdo não é uma cobrança Pix válida.
      const conteudo = 'DEMO-LIVRARIA-PAGAMENTO-PIX';
      qr.src =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrh5swx_f9qcpfMX9xVguNe_LGOswL2MlM774gD25Gfg&s=10' +
        encodeURIComponent(conteudo);

      detalhesPagamento.append(titulo, aviso, qr);
    }

    if (opcao.value === 'credito' && opcao.checked) {
      const titulo = document.createElement('h3');
      titulo.textContent = 'Dados do cartão de crédito';

      const aviso = document.createElement('p');
      aviso.textContent =
        'Modo de demonstração. Não informe dados de um cartão real.';

      const numeroLabel = document.createElement('label');
      numeroLabel.textContent = 'Número fictício do cartão';

      const numero = document.createElement('input');
      numero.placeholder = '0000 0000 0000 0000';
      numero.inputMode = 'numeric';
      numero.autocomplete = 'off';
      numero.required = true;
      numero.maxLength = 19;

      const validadeLabel = document.createElement('label');
      validadeLabel.textContent = 'Validade';

      const validade = document.createElement('input');
      validade.placeholder = 'MM/AA';
      validade.maxLength = 5;
      validade.required = true;
      validade.autocomplete = 'off';

      const parcelasLabel = document.createElement('label');

      const parcelas = document.createElement('select');
      parcelas.required = true;

      [
        ['', 'Selecione as parcelas'],
        ['1', '1x sem juros (simulação)'],
        ['2', '2x sem juros (simulação)'],
        ['3', '3x sem juros (simulação)'],
      ].forEach(([valor, texto]) => {
        const option = document.createElement('option');
        option.value = valor;
        option.textContent = texto;
        parcelas.appendChild(option);
      });

      detalhesPagamento.append(
        titulo,
        aviso,
        numeroLabel,
        numero,
        validadeLabel,
        validade,
        parcelasLabel,
        parcelas
      );
    }
  });
});

// Confirma apenas um pedido demonstrativo.
document.getElementById('form-checkout').addEventListener('submit', (event) => {
  event.preventDefault();

  if (carrinho.length === 0) {
    alert('Adicione livros ao carrinho antes de continuar.');
    checkout.close();
    return;
  }

  const nome = document.getElementById('nome').value.trim();

  const metodo = document.querySelector('input[name="metodo"]:checked');

  if (!nome || !metodo) {
    alert('Preencha os dados e selecione um pagamento.');
    return;
  }

  if (metodo.value === 'credito') {
    const numero = detalhesPagamento.querySelector(
      'input[placeholder="0000 0000 0000 0000"]'
    );

    if (!numero || !/^[0-9 ]{13,19}$/.test(numero.value)) {
      alert('Digite um número fictício válido para a demonstração.');
      return;
    }
  }

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  alert(
    'PEDIDO DE DEMONSTRAÇÃO\n\n' +
      'Cliente: ' +
      nome +
      '\n' +
      'Pagamento: ' +
      (metodo.value === 'pix'
        ? 'Pix demonstrativo'
        : 'Cartão de crédito demonstrativo') +
      '\n' +
      'Total: ' +
      moeda(total) +
      '\n\n' +
      'Nenhum pagamento real foi realizado.'
  );

  checkout.close();
  carrinho = [];
  atualizarCarrinho();
  event.target.reset();
  detalhesPagamento.replaceChildren();
});
const seletorParcelas = document.getElementById('parcelas');

function atualizarParcelas() {
  if (!seletorParcelas) return;

  // Calcula o total dos produtos no carrinho
  const total = carrinho.reduce((soma, item) => {
    return soma + Number(item.preco) * Number(item.quantidade);
  }, 0);

  const quantidade = Number(seletorParcelas.value);

  // Taxa ilustrativa: 2% ao mês a partir de 2 parcelas
  const taxaMensal = quantidade === 1 ? 0 : 0.02;

  // Fórmula de parcelas fixas com juros compostos
  let valorFinal;

  if (taxaMensal === 0) {
    valorFinal = total;
  } else {
    valorFinal =
      ((total * (taxaMensal * Math.pow(1 + taxaMensal, quantidade))) /
        (Math.pow(1 + taxaMensal, quantidade) - 1)) *
      quantidade;
  }

  const juros = valorFinal - total;
  const valorDeCadaParcela = valorFinal / quantidade;

  const moeda = (valor) =>
    valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  document.getElementById('total-compra').textContent = moeda(total);
  document.getElementById('valor-juros').textContent = moeda(juros);
  document.getElementById('total-com-juros').textContent = moeda(valorFinal);

  document.getElementById(
    'valor-parcela'
  ).textContent = `${quantidade}x de ${moeda(valorDeCadaParcela)}`;
}

if (seletorParcelas) {
  seletorParcelas.addEventListener('change', atualizarParcelas);
  atualizarParcelas();
}
