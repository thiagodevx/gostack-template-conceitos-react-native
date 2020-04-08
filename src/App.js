import React, { useState, useEffect } from 'react'

import ListItem from './ListItem'

import {
  SafeAreaView,
  View,
  FlatList,
  StatusBar,
  StyleSheet
} from 'react-native'

import api from './services/api'

export default function App() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data)
    })
  }, [])
  async function handleLikeRepository(id) {
    api.post(`repositories/${id}/like`).then(response => {
      const index = repositories.findIndex(repository => repository.id === id)
      const newRepositories = [...repositories]
      newRepositories[index] = response.data
      setRepositories(newRepositories)
    })
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <View style={styles.repositoryContainer}>
          <FlatList
            data={repositories}
            keyExtractor={data => data.id}
            renderItem={({ item }) => (
              <ListItem
                repository={item}
                like={handleLikeRepository}
              ></ListItem>
            )}
          ></FlatList>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1'
  },
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 20
  }
})
