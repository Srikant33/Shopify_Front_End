import './Main.scss';
import $ from 'jquery';


export default function Main(props) {
 
  const myFunction = (e) => {
    e.preventDefault();
    const userText = $('#pairText').val();

    const data = {
      prompt: userText,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    
    const URL = `https://api.openai.com/v1/engines/text-curie-001/completions`;

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI}`,

       },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      $('#pairText').val('');
      props.putKey(prev => [...prev, userText]);
      props.putValue(prev => [...prev, data.choices[0].text]);
    });
  };

  return (
    <>
      <form id='user-form' action='./#'>
        <div className='wrapper'>
          <div id='header-wrap'>
            <h2>Shopify frontend Intern</h2>
           </div>
           <h3>Fun with AI</h3>
          <textarea id='pairText' name = "question"></textarea>
          <button onClick={(e) => myFunction(e)}>Submit</button>
        </div>
      </form>
   </>
  );
}