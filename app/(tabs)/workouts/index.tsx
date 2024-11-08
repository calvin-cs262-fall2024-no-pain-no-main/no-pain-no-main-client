import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView, View, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const backgroundImage = require('../../../assets/images/gym-buddy.png'); // Update the path according to your folder structure

const Workouts = () => {
    const router = useRouter();

    async function startEmptyWorkout() {
        router.push('../workouts/empty-workout');
    }

// Modify the state when deleting a workout (e.g., removing it from an array)
const [workouts, setWorkouts] = React.useState([
    { id: 1, name: 'Workout 1' },
    { id: 2, name: 'Workout 2' },
]);

async function deleteWorkout(workoutId) {
    const updatedWorkouts = workouts.filter(workout => workout.id !== workoutId);
    setWorkouts(updatedWorkouts);
    console.log(`Deleted workout: ${workoutId}`);
}


    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                {/* Recent Workouts Section */}
                <Text style={styles.sectionTitle}>Recent Workouts</Text>
                <View style={styles.gridContainer}>
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.cardText}>Workout 1</Text>
                        <TouchableOpacity 
                            style={styles.trashButton} 
                            onPress={() => deleteWorkout(1)}
                        >
                            <MaterialIcons name="delete" size={24} color="#fff" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.cardText}>Workout 2</Text>
                        <TouchableOpacity 
                            style={styles.trashButton} 
                            onPress={() => deleteWorkout(2)}
                        >
                            <MaterialIcons name="delete" size={24} color="#fff" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>

                {/* Suggested Workouts Section */}
                <Text style={styles.sectionTitle}>Workouts Templates</Text>
                <View style={styles.gridContainer}>
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.cardTitle}>Push</Text>
                        <Text style={styles.cardDescription}>A workout focused on pushing movements, targeting chest, shoulders, and triceps.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.cardTitle}>Pull</Text>
                        <Text style={styles.cardDescription}>A workout that emphasizes pulling movements, focusing on back and biceps.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.cardTitle}>Legs</Text>
                        <Text style={styles.cardDescription}>Leg-focused exercises targeting quads, hamstrings, and calves.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.cardTitle}>Special</Text>
                        <Text style={styles.cardDescription}>A mix of compound exercises for a full-body workout.</Text>
                    </TouchableOpacity>
                </View>

                {/* Empty Workout Button */}
                <TouchableOpacity style={[styles.button, styles.emptyButton]} onPress={startEmptyWorkout}>
                    <FontAwesome name="plus-circle" size={24} color="#3498db" style={styles.icon} />
                    <Text style={styles.emptyButtonText}>Create Empty Workout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0D1B2A',
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 21,
        backgroundColor: '#0D1B2A',
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 15,
        textAlign: 'left',
        width: '100%',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30,
    },
    card: {
        width: '48%',
        backgroundColor: '#2C3E50',
        padding: 30,
        marginBottom: 20,
        borderRadius: 10,
        alignItems: 'left',
        justifyContent: 'center',
        position: 'relative',
    },
    cardText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'left',
    },
    cardTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 5,
    },
    cardDescription: {
        color: '#e0e0e0',
        fontSize: 12,
        textAlign: 'left',
    },
    trashButton: {
        position: 'absolute',
        top: 2,
        right: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 15,
        padding: 4,
    },
    button: {
        flexDirection: 'row',
        color: '#A5D6A7',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 15,
        marginVertical: 10,
        width: '90%',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 3,
    },
    emptyButton: {
        backgroundColor: '#A5D6A7',
    },
    icon: {
        marginRight: 10,
    },
    emptyButtonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
});

export default Workouts;
