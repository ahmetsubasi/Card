import { StyleSheet, View } from 'react-native';
import Card from './src/Card';


export default function App() {
  return (
    <View style={styles.container}>
      <Card
      title="Burhan Altintop"
      text="İleri git Burhan. Geri gel Burhan, Han, An, Nnn!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems:'center',
    justifyContent:'center'
  },
});
