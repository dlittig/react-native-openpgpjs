import { NativeModules } from 'react-native'
import { shim } from './shim'

const { RNOpenpgpjs } = NativeModules

shim()
const openpgp = require('./node_modules/openpgp/dist/openpgp.min')
export default { ...openpgp }