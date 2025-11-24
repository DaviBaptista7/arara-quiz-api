'use strict'

const { v4: uuidv4 } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const now = new Date()

      console.log('🔍 Buscando temas...')

      // 1. Buscar os temas na ordem correta
      const themes = await queryInterface.sequelize.query(
        `SELECT id, name FROM themes ORDER BY created_at ASC`,
        { type: Sequelize.QueryTypes.SELECT }
      )

      console.log(`✅ Encontrados ${themes.length} temas:`)
      themes.forEach((theme, index) => {
        console.log(`  ${index + 1}. ${theme.name} (${theme.id})`)
      })

      if (themes.length < 5) {
        throw new Error(`❌ Você precisa ter 5 temas cadastrados. Encontrados: ${themes.length}`)
      }

      
      // Mapear temas por nome
      const themeMap = {
        'História de Araraquara': themes[0].id,
        'Time da Ferroviária': themes[1].id,
        'Boulevard dos Oitis': themes[2].id,
        'Museu ferroviário': themes[3].id,
        'Folclore': themes[4].id
      }

      console.log('\n📋 Mapeamento de temas:')
      Object.entries(themeMap).forEach(([name, id]) => {
        console.log(`  ${name} → ${id}`)
      })

      const questions = [
        // História de Araraquara (6 perguntas)
        {
          id: uuidv4(),
          question: 'Quem fundou a cidade?',
          difficulty: 'easy',
          score: 10,
          explanation: 'Pedro José Neto é considerado o fundador de Araraquara.',
          correct_answer: 2,
          alternatives: JSON.stringify([
            "José de Anchieta",
            "Barão do Pinhal",
            "Pedro José Neto",
            "Antônio Teixeira do Espírito Santo"
          ]),
          theme_id: themeMap['História de Araraquara'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Em que ano foi fundado a cidade?',
          difficulty: 'easy',
          score: 10,
          explanation: 'A cidade foi fundada em 1817.',
          correct_answer: 2,
          alternatives: JSON.stringify(["1812", "1820", "1817", "1810"]),
          theme_id: themeMap['História de Araraquara'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Em que ano a cidade foi elevada à categoria de município?',
          difficulty: 'medium',
          score: 20,
          explanation: 'A cidade foi elevada à categoria de município em 1832.',
          correct_answer: 3,
          alternatives: JSON.stringify(["Em 1840", "Em 1838", "Em 1830", "Em 1832"]),
          theme_id: themeMap['História de Araraquara'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Qual o significado do nome de Araraquara em sua origem?',
          difficulty: 'medium',
          score: 20,
          explanation: 'O significado do nome Araraquara vem do tupi-guarani Morada do Sol.',
          correct_answer: 0,
          alternatives: JSON.stringify([
            "Morada do Sol",
            "Morada das Araras",
            "Toca das Araras",
            "Morada da Laranja"
          ]),
          theme_id: themeMap['História de Araraquara'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Qual a federação brasileira que Araraquara se encontra?',
          difficulty: 'hard',
          score: 30,
          explanation: 'Araraquara se localiza no estado de São Paulo, que é a unidade federativa.',
          correct_answer: 3,
          alternatives: JSON.stringify([
            "Rio de Janeiro",
            "Espírito Santos",
            "Minas Gerais",
            "São Paulo"
          ]),
          theme_id: themeMap['História de Araraquara'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Em que ano foi instalado oficialmente a 1º câmara municipal da cidade?',
          difficulty: 'hard',
          score: 30,
          explanation: 'A primeira câmara municipal foi instalada oficialmente em 1833.',
          correct_answer: 0,
          alternatives: JSON.stringify(["1833", "1836", "1830", "1834"]),
          theme_id: themeMap['História de Araraquara'],
          created_at: now,
          updated_at: now
        },

        // Time da Ferroviária (6 perguntas)
        {
          id: uuidv4(),
          question: 'Em que ano o time da Ferroviária foi fundado?',
          difficulty: 'easy',
          score: 10,
          explanation: 'O time foi fundado em 1950.',
          correct_answer: 2,
          alternatives: JSON.stringify(["1951", "1955", "1950", "1947"]),
          theme_id: themeMap['Time da Ferroviária'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Qual o apelido dado à Ferroviária?',
          difficulty: 'easy',
          score: 10,
          explanation: 'Possui o apelido de Ferrinha.',
          correct_answer: 1,
          alternatives: JSON.stringify([
            "Os Trilheiros do Interior",
            "Ferrinha",
            "Ferrovi",
            "Locomotiva"
          ]),
          theme_id: themeMap['Time da Ferroviária'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Em que ano o estádio Fonte Luminosa foi construído?',
          difficulty: 'medium',
          score: 20,
          explanation: 'O estádio foi construído em 1951.',
          correct_answer: 2,
          alternatives: JSON.stringify(["1952", "1953", "1951", "1949"]),
          theme_id: themeMap['Time da Ferroviária'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Qual a cor predominante do uniforme da Ferroviária?',
          difficulty: 'medium',
          score: 20,
          explanation: 'A cor que mais se predomina em sua bandeira é grená.',
          correct_answer: 3,
          alternatives: JSON.stringify(["Vermelho", "Vinho", "Bordô", "Grená"]),
          theme_id: themeMap['Time da Ferroviária'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Quem foi o treinador da Ferroviária na campanha do campeonato Brasileiro feminino de 2019?',
          difficulty: 'hard',
          score: 30,
          explanation: 'A treinadora que atuou em 2019 foi Tatiele Silveira.',
          correct_answer: 3,
          alternatives: JSON.stringify([
            "Emily Lima",
            "Thamires Peixoto",
            "Léo Mendes",
            "Tatiele Silveira"
          ]),
          theme_id: themeMap['Time da Ferroviária'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Qual foi o maior público já registrado na Fonte Luminosa?',
          difficulty: 'hard',
          score: 30,
          explanation: 'O maior público já registrado no estádio foi de 21.254.',
          correct_answer: 2,
          alternatives: JSON.stringify(["22.383", "23.409", "21.254", "20.217"]),
          theme_id: themeMap['Time da Ferroviária'],
          created_at: now,
          updated_at: now
        },

        // Boulevard dos Oitis (6 perguntas)
        {
          id: uuidv4(),
          question: 'Qual o nome da avenida onde se predomina a maior concentração de árvores Oitis em Araraquara?',
          difficulty: 'easy',
          score: 10,
          explanation: 'O nome da avenida dos Oitis se chama Voluntários da Pátria.',
          correct_answer: 1,
          alternatives: JSON.stringify([
            "Expedicionários do Brasil",
            "Voluntários da Pátria",
            "São Bento",
            "Bento de Abreu"
          ]),
          theme_id: themeMap['Boulevard dos Oitis'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Qual o apelido da rua 5 em Araraquara?',
          difficulty: 'easy',
          score: 10,
          explanation: 'O seu nome popular é Boulevard dos Oitis.',
          correct_answer: 1,
          alternatives: JSON.stringify([
            "Rua dos Passos",
            "Boulevard dos Oitis",
            "Rua da Alegria",
            "Quinta Avenida"
          ]),
          theme_id: themeMap['Boulevard dos Oitis'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Em que ano foram plantadas as árvores Oitis?',
          difficulty: 'medium',
          score: 20,
          explanation: 'As árvores foram plantadas em 1912.',
          correct_answer: 3,
          alternatives: JSON.stringify(["1910", "1911", "1915", "1912"]),
          theme_id: themeMap['Boulevard dos Oitis'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Qual era o nome antigo da rua antes da mudança para Voluntários da Pátria?',
          difficulty: 'medium',
          score: 20,
          explanation: 'Era mais reconhecido como a "Rua Alegre".',
          correct_answer: 1,
          alternatives: JSON.stringify([
            "Rua da Alegria",
            "Rua Alegre",
            "Boulevard dos Oitis",
            "Rua dos Passos"
          ]),
          theme_id: themeMap['Boulevard dos Oitis'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Qual é o principal motivo histórico cuja rua recebeu o nome de Voluntários da Pátria?',
          difficulty: 'hard',
          score: 30,
          explanation: 'Em homenagem aos jovens que se voluntariaram para lutar na Guerra do Paraguai em 1864.',
          correct_answer: 0,
          alternatives: JSON.stringify([
            "Em homenagem aos jovens que se voluntariaram para lutar na Guerra do Paraguai",
            "Por causa de um movimento popular de moradores da rua",
            "Devido a uma homenagem ao prefeito da época",
            "Em memória dos fundadores da cidade"
          ]),
          theme_id: themeMap['Boulevard dos Oitis'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Como que as árvores Oitis surgiram em Araraquara?',
          difficulty: 'hard',
          score: 30,
          explanation: 'As árvores surgiram por meio de um extenso plantio realizado durante a urbanização da cidade.',
          correct_answer: 1,
          alternatives: JSON.stringify([
            "A prefeitura realizou um grande plano de arborização na década de 1930",
            "Por meio de um extenso plantio realizado durante a urbanização da cidade",
            "Essas árvores foram plantadas devido aos seus famosos frutos",
            "Foi devido a um viajante que realizou a plantação dos Oitis como presente"
          ]),
          theme_id: themeMap['Boulevard dos Oitis'],
          created_at: now,
          updated_at: now
        },

        // Museu ferroviário (6 perguntas)
        {
          id: uuidv4(),
          question: 'Em que ano foi fundado o Museu Ferroviário?',
          difficulty: 'easy',
          score: 10,
          explanation: 'O Museu Ferroviário foi fundado em 1992.',
          correct_answer: 0,
          alternatives: JSON.stringify(["1992", "1995", "1990", "1993"]),
          theme_id: themeMap['Museu ferroviário'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Qual a origem do museu?',
          difficulty: 'easy',
          score: 10,
          explanation: 'Remonta ao ano de 1990, quando a ABPF obteve a cessão do 1º andar da antiga estação.',
          correct_answer: 2,
          alternatives: JSON.stringify([
            "Um grupo de moradores uniram-se para recuperar prédios abandonados",
            "Um grande apaixonado por trens colecionou objetos durante décadas",
            "No ano de 1990, quando a Associação Brasileira de Preservação Ferroviária (ABPF) obteve a cessão do 1º andar da antiga estação para o projeto.",
            "O museu é fruto de uma colaboração entre a Prefeitura de São Carlos e a ABPF"
          ]),
          theme_id: themeMap['Museu ferroviário'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Qual ano o museu foi reinaugurado?',
          difficulty: 'medium',
          score: 20,
          explanation: 'O museu foi reaberto em 2008 após o restauro do prédio da antiga Estação Ferroviária.',
          correct_answer: 2,
          alternatives: JSON.stringify(["2007", "2010", "2008", "2011"]),
          theme_id: themeMap['Museu ferroviário'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Qual foi o último ano em que o museu Ferroviário funcionava como uma estação ferroviária?',
          difficulty: 'medium',
          score: 20,
          explanation: 'Em 2001, com o trem de passageiros sendo desativado neste ano.',
          correct_answer: 1,
          alternatives: JSON.stringify(["2002", "2001", "2000", "1998"]),
          theme_id: themeMap['Museu ferroviário'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Qual o horário principal que o museu funciona?',
          difficulty: 'hard',
          score: 30,
          explanation: 'O seu horário principal funciona de Seg à sex, das 9h às 17h.',
          correct_answer: 0,
          alternatives: JSON.stringify([
            "Seg à sex, das 9h às 17h",
            "Seg à sex, das 7h às 18h",
            "Seg à sex, das 8h às 17h",
            "Seg à sex, das 7h às 19h"
          ]),
          theme_id: themeMap['Museu ferroviário'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Qual endereço está localizado o museu?',
          difficulty: 'hard',
          score: 30,
          explanation: 'O Museu Ferroviário atualmente está localizado na Rua Antônio Prado 611.',
          correct_answer: 1,
          alternatives: JSON.stringify([
            "Rua Antônio Prado 620",
            "Rua Antônio Prado 611",
            "Av. Antónia de Camargo de Oliveira",
            "Rua Antônio Prado 811"
          ]),
          theme_id: themeMap['Museu ferroviário'],
          created_at: now,
          updated_at: now
        },

        // Folclore (6 perguntas)
        {
          id: uuidv4(),
          question: 'Quais dessas lendas está associada à cidade de Araraquara?',
          difficulty: 'easy',
          score: 10,
          explanation: 'A lenda que está associada à cidade é a Serpente da igreja da Matriz.',
          correct_answer: 3,
          alternatives: JSON.stringify([
            "Curupira",
            "Fantasma do Trevo",
            "Maria Algodão",
            "Serpente da igreja"
          ]),
          theme_id: themeMap['Folclore'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Onde ficam as pegadas dos dinossauros?',
          difficulty: 'easy',
          score: 10,
          explanation: 'Atualmente estão localizadas na Rua 5 (Voluntários da Pátria).',
          correct_answer: 1,
          alternatives: JSON.stringify([
            "Rua 6",
            "Rua 5",
            "Av. José Bonifácio",
            "Av. Espanha"
          ]),
          theme_id: themeMap['Folclore'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'A lenda da serpente embaixo da igreja Matriz afirma que acorda em quantos anos?',
          difficulty: 'medium',
          score: 20,
          explanation: 'A cada 8 anos a serpente desperta-se debaixo da igreja.',
          correct_answer: 0,
          alternatives: JSON.stringify([
            "A cada 8 anos",
            "A cada 10 anos",
            "A cada 16 anos",
            "A cada 7 anos"
          ]),
          theme_id: themeMap['Folclore'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'A estátua da águia que fica em frente à matriz foi colocada para?',
          difficulty: 'medium',
          score: 20,
          explanation: 'A águia, como símbolo de proteção, estaria lá para manter a serpente adormecida ou contida.',
          correct_answer: 0,
          alternatives: JSON.stringify([
            "Para proteger a igreja do mal da serpente.",
            "A águia acorda a cada oito anos e se mexe por sete minutos",
            "É o mascote oficial do time grená (Ferroviária).",
            "Está relacionada à origem do nome de Araraquara"
          ]),
          theme_id: themeMap['Folclore'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'Segundo a lenda, qual maneira a serpente impediria da igreja ficar concluída?',
          difficulty: 'hard',
          score: 30,
          explanation: 'A serpente se move a cada 8 anos, causando danos estruturais na Igreja.',
          correct_answer: 3,
          alternatives: JSON.stringify([
            "Daqui a 80 anos, ela irá causar uma destruição em massa na Igreja",
            "Ela se move a cada 3 anos, causando danos estruturais.",
            "A serpente acorda a cada 3 anos para devorar a primeira pessoa que entra na Igreja.",
            "Ela se move a cada 8 anos, causando danos estruturais."
          ]),
          theme_id: themeMap['Folclore'],
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          question: 'A lenda menciona a origem da serpente ligada ao evento trágico envolvendo uma mulher, qual é o evento?',
          difficulty: 'hard',
          score: 30,
          explanation: 'Uma mulher teve um filho indesejado e o jogou em um córrego que passava na frente da igreja.',
          correct_answer: 1,
          alternatives: JSON.stringify([
            "Uma artista de teatro que se apresentava em eventos religiosos sumiu misteriosamente.",
            "Uma mulher teve um filho indesejado e o jogou num córrego em frente da igreja.",
            "Uma mulher misteriosa surge para ajudar quem está em perigo perto da igreja.",
            "Uma noiva que foi abandonada no altar aparece com seu vestido caminhando pela Igreja."
          ]),
          theme_id: themeMap['Folclore'],
          created_at: now,
          updated_at: now
        }
      ]
      console.log(`\n📝 Inserindo ${questions.length} questões...`)

      await queryInterface.bulkInsert('questions', questions, {})

      console.log('✅ Questões inseridas com sucesso!')

    } catch (error) {
      console.error('❌ Erro ao inserir questões:')
      console.error(error)
      throw error
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questions', null, {})
  }
}
