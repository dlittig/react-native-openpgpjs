import { NativeModules } from 'react-native'
import { shim } from './shim'

const { RNOpenpgpjs } = NativeModules

console.log(window)

if(window !== null) {
  console.log(window.crypto)
}

shim()
const openpgp = require('./node_modules/openpgp/dist/openpgp.min')
export default { ...openpgp }