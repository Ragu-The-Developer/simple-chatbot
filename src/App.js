
import './App.css';
import ChatBot from 'react-simple-chatbot';
import Logo from '../src/assets/gpt.png';
function App() {
  return (
    
   <div className='py-3'>
    <img src= { Logo } width={70} height={70} />
    <div className='flex justify-center items-center w-full mt-10'>
    <ChatBot headerTitle = "Chatbot " className="w-80 mt-32" speechSynthesis={{ enable: true, lang: 'en' }} 
  steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '4',
    },
    {
      id: '4',
      message: 'By The Way , What Programming Languages You Know ?',
      trigger: '5',
    },

    {
      id: '5',
      user: true,
      trigger: '6',
    },
      
    {
      id: '6',
      message: 'Wow , Thats Great..!!, Keep It Up',
      trigger: '7',
    },

    {
      id: '7',
      message: 'What is your Aim In IT Industry',
      trigger: '8',
    },

    {
      id: '8',
      user: true,
      trigger: '9',
    },

    {
      id: '9',
      message: 'Fantastic , All The Best For Your Future Endeavours',
      trigger: '10',
    },

    {
      id: '10',
      message: 'Its an Nice Conversion With You Buddy..',
      trigger: '11',
    },

    {
      id: '11',
      message: 'Chat Ended.',
      end: true,
    },
    
  ]}

/>
</div>

    </div>
  );
}

export default App;
