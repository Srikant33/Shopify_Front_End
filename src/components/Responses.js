import Query from './Query';


export default function Responses(props) {

  const prompts = props.curKey || [];
  const reply = props.curValue || [];

  const KeyValuePair = reply.map((response, index) => {
    return <Query key={index} pair={prompts[index]} value={response} />
  });

  return (
    <section id='reply'>
     {KeyValuePair.reverse()}
    </section>
  );
}