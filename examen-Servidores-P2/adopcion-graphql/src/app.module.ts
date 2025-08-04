import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsuarioResolver } from './resolvers/usuario.resolver';
import { MascotaResolver } from './resolvers/mascota.resolver';
import { FormularioAdopcionResolver } from './resolvers/formulario-adopcion.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      introspection: true,
    }),
  ],
  providers: [
    UsuarioResolver,
    MascotaResolver,
    FormularioAdopcionResolver,
  ],
})
export class AppModule {}
