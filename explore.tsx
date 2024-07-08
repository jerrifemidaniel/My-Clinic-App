import { Image, StyleSheet, TextInput, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ClinicalRecordScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFD700', dark: '#FFD700' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.centralizedText}>Clinical Record</ThemedText>
      </ThemedView>
      <ThemedView style={styles.fieldContainer}>
        <TextInput 
          placeholder="Clinic Date" 
          style={styles.parallelogramInput} 
        />
      </ThemedView>
      <ThemedView style={styles.fieldContainer}>
        <TextInput 
          placeholder="Nature of Ailment" 
          style={styles.parallelogramInput} 
        />
      </ThemedView>
      <ThemedView style={styles.fieldContainer}>
        <TextInput 
          placeholder="Medicine Prescribed" 
          style={styles.parallelogramInput} 
        />
      </ThemedView>
      <ThemedView style={styles.fieldContainer}>
        <TextInput 
          placeholder="Procedure Undertaken" 
          style={styles.parallelogramInput} 
        />
      </ThemedView>
      <ThemedView style={styles.fieldContainer}>
        <TextInput 
          placeholder="Date of Next Appointment" 
          style={styles.parallelogramInput} 
        />
      </ThemedView>
      
      {/* "Done" Text */}
      <ThemedView style={styles.doneContainer}>
        <ThemedText style={styles.doneText}>Done</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center', // Center the title container
    marginBottom: 16,
  },
  centralizedText: {
    textAlign: 'center',
  },
  fieldContainer: {
    marginBottom: 16,
    alignItems: 'center', // Center the field containers
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  parallelogramInput: {
    backgroundColor: 'lightgrey',
    padding: 20, // Increase padding for larger input fields
    fontWeight: 'bold',
    transform: [{ skewX: '-20deg' }],
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    width: '80%', // Make the parallelograms horizontally longer
    textAlign: 'center', // Center the text inside the input fields
    opacity: 0.5,
  },
  doneContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  doneText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Adjust the color as needed
  },
});
