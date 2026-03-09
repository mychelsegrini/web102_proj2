import './App.css';
import Card from './components/Card'

let cards = [
  {
    question: "How do you say \"bread\" in Portuguese?",
    ans: "Pão"
  },
  {
    question: "Translate to English: \"Fui trabalhar ontem à noite e cheguei agora.\"",
    ans: "I went to work yesterday and I have just arrived."
  },
  {
    question: "How do you say \"Apple\" in Portuguese?",
    ans: "Maçã"
  },
  {
    question: "Translate to English: \"Bom dia, como você está?\"",
    ans: "Good morning, how are you?"
  },
  {
    question: "What is the Portuguese word for \"Water\"?",
    ans: "Água"
  },
  {
    question: "Translate to Portuguese: \"Where is the bathroom?\"",
    ans: "Onde fica o banheiro?"
  },
  {
    question: "How do you say \"Thank you\" (if you identify as male)?",
    ans: "Obrigado"
  },
  {
    question: "Translate to English: \"Eu gosto de aprender idiomas.\"",
    ans: "I like to learn languages."
  },
  {
    question: "How do you say \"Beer\" in Portuguese?",
    ans: "Cerveja"
  },
  {
    question: "Translate to Portuguese: \"The book is on the table.\"",
    ans: "O livro está sobre a mesa."
  },
  {
    question: "What does \"Saudade\" roughly mean in English?",
    ans: "A deep emotional state of nostalgic longing."
  },
  {
    question: "Translate to English: \"Prazer em conhecê-lo.\"",
    ans: "Nice to meet you."
  }
];
const App = () => {

  return (
    <div className="App">
      <h1>Learning Portuguese!</h1>
      <h2>Could you go to Brazil?</h2>
      <h3>Number of cards: {cards.length}</h3>
      <Card cards={cards}/>
    </div>
  )
}

export default App