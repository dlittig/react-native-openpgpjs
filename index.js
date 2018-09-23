import { NativeModules } from 'react-native'
import { shim } from './shim'

const { RNOpenpgpjs } = NativeModules

shim()
export default { ...openpgp }