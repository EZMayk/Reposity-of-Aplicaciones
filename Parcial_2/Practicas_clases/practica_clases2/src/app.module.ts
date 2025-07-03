import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { UbicacionesModule } from './ubicaciones/ubicaciones.module';
import { ConsultaClimasModule } from './consulta-climas/consulta-climas.module';
import { ClimasModule } from './climas/climas.module';

@Module({
  imports: [
   GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),

   UbicacionesModule,
   ConsultaClimasModule,
   ClimasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
