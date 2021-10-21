import Container from './components/Container'
import Form from './components/Form/FeedbackForm'
import Footer from './components/Footer';
import BG from './components/BG/BG';


function App() {
  return (
    <>
    <BG>
      <Container>
        <Form />
      </Container>
   
    </BG>
      <Footer />
      </>
  );
}

export default App;
