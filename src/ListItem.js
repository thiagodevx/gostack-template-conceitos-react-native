import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
export default ({ repository, like }) => (
  <>
    <Text style={styles.repository}>{repository.title}</Text>
    <View style={styles.techsContainer}>
      {repository.techs.map((tech, index) => (
        <>
          <Text key={index} style={styles.tech}>
            {tech}
          </Text>
        </>
      ))}
    </View>

    <View style={styles.likesContainer}>
      <Text
        style={styles.likeText}
        testID={`repository-likes-${repository.id}`}
      >
        {repository.likes} curtidas
      </Text>
    </View>
    <TouchableOpacity
      style={styles.button}
      onPress={() => like(repository.id)}
      testID={`like-button-${repository.id}`}
    >
      <Text style={styles.buttonText}>Curtir</Text>
    </TouchableOpacity>
  </>
)
const styles = StyleSheet.create({
  repository: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  techsContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  tech: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    backgroundColor: '#04d361',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#fff'
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  likeText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10
  },
  button: {
    marginTop: 10
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#fff',
    backgroundColor: '#7159c1',
    padding: 15
  }
})
