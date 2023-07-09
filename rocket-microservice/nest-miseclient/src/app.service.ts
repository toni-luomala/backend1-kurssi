import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';

@Injectable()
export class AppService {
  client: ClientProxy; // clientin määrittely luokan propertynä

  constructor() {
    // ClientProxyFactory-luokan create-metodilla luodaan client.
    // Sen asetukset annetaan argumenttina olevassa oliossa
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877,
      },
    });
  }
  /* metodi jossa client lähettää mikropalvelulle pyynnön, jossa on
     tunniste 'get-next-launch-remaining-time'.
     Paluuarvona tulee vastaus, eli jäljellä oleva aika seuraavan
     raketin laukaisuun.
  */
  getNextLaunchRemainingTime() {
    return this.client.send<string, string>(
      'get-next-launch-remaining-time',
      '',
    );
  }
}
