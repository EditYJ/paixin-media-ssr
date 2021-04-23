import { Module } from 'vuex'
import { GlobalStoreProps } from '..'
import { getRandomDog } from '@/api'
import { actionWrapper } from '@/store'

export interface DogProps {
  imgUrl: String
}

const dog: Module<DogProps, GlobalStoreProps> = {
  namespaced: true,
  state: {
    imgUrl: '',
  },
  mutations: {
    SET_IMG_URL(state, { message }) {
      state.imgUrl = message
    },
  },
  actions: {
    fetchRandomDog: actionWrapper(getRandomDog, 'SET_IMG_URL'),
    // async fetchRandomDog(state, payload) {
    //   const data = await getRandomDog()
    //   state.commit('setDog', data)
    // },
  },
}

export default dog
