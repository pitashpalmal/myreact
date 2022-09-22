import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";
import Bracket from "./components/composition/Bracket";

// function App() {
//   return <Emoji><Text /></Emoji>;
//   // here Emoji is parent and Text component is a props.children
// }

function App() {
    return(
      <Emoji>
          { ({addEmoji}) => (
            <Bracket>
                {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
            </Bracket>
          ) }
      </Emoji>
    );
}

export default App;