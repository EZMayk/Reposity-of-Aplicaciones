import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { ClimaModule } from './clima/clima.module';
import { ConsultaClimaModule } from './consulta-clima/consulta-clima.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // code-first
      playground: true,      // habilita la UI GraphQL Playground
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      autoLoadEntities: true, // carga automáticamente las entidades
      synchronize: true, // para desarrollo, crea las tablas automáticamente
    }),
    UbicacionModule,
    ClimaModule,
    ConsultaClimaModule,
  ],
})
export class AppModule {}

