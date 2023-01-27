import axios from 'axios'
import os from 'os'

export async function getLocationByIP() {
  const networkInfo = os.networkInterfaces();
  const ip = networkInfo.lo![0].address
  A
}