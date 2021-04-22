import { Module } from 'vuex'
import { GlobalStoreProps } from '..'
import { getRandomDog } from '@/api'

export interface DogProps {
  imgUrl: String
}

const dog: Module<DogProps, GlobalStoreProps> = {
  namespaced: true,
  state: {
    imgUrl: '',
  },
  mutations: {
    setDog(state, { message }) {
      state.imgUrl = message
    },
  },
  actions: {
    async getRandomDog(state) {
      const data = await getRandomDog()
      state.commit('setDog', data)
    },
  },
}

export default dog
