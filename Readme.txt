# Cowork.App

## Descrição
O Cowork.App é um aplicativo móvel desenvolvido com Node.JS para ajudar usuários a localizar Coworkings próximos a eles. Um Coworking é um espaço de trabalho compartilhado onde profissionais independentes, freelancers e pequenas equipes podem trabalhar de maneira flexível e colaborativa.

## Consumo de API
Inicialmente, o aplicativo tentou integrar a API do Google Maps para exibir mapas e pontos de interesse. No entanto, devido às limitações e dificuldades de integração com aplicativos móveis, optou-se por utilizar o componente `react-native-maps`, específico para desenvolvimento em React Native. Para o funcionamento do aplicativo, foi criada uma API interna no formato JSON (`locs.json`). Esta API contém informações essenciais sobre os Coworkings, incluindo nome, localização geográfica (latitude e longitude) e uma breve descrição.

## Navegação
A navegação entre as telas do aplicativo (Home e Mapa) foi implementada utilizando o pacote `react-navigation`, que facilita a criação de fluxos de navegação em aplicativos React Native. Isso proporciona uma experiência de usuário fluida ao alternar entre a tela inicial, onde se exibe uma introdução ao aplicativo, e a tela do mapa, onde são visualizados os Coworkings próximos.

## Implementação do Código

### Arquivos Principais

1. **Map.js**
   - Componente que exibe o mapa utilizando o `react-native-maps`.
   - Usa a API do `expo-location` para obter a localização atual do usuário.
   - Renderiza marcadores dinamicamente com base nos dados contidos em `locs.json`.

2. **Navigation.js**
   - Define o fluxo de navegação utilizando `StackNavigator` do `react-navigation`.
   - Inclui duas telas principais: Home e Mapa.

3. **HomeScreen.js**
   - Tela inicial que apresenta uma breve introdução ao aplicativo e um botão para acessar o mapa.

## Conclusão

O Cowork.App é uma solução prática para localizar Coworkings próximos, utilizando tecnologias modernas como `react-native-maps` para visualização de mapas e `react-navigation` para navegação entre telas. A utilização de uma API interna (`locs.json`) facilita o gerenciamento e a exibição de informações sobre os Coworkings diretamente no aplicativo móvel, proporcionando uma experiência intuitiva e eficiente para os usuários.
