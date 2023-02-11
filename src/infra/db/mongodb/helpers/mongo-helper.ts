import { MongoClient, ConnectOptions } from 'mongodb'

export const MongoHelper = {
  client: null,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}
