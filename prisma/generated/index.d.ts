
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model UserAnswer
 * 
 */
export type UserAnswer = $Result.DefaultSelection<Prisma.$UserAnswerPayload>
/**
 * Model UserQuestionSeed
 * 
 */
export type UserQuestionSeed = $Result.DefaultSelection<Prisma.$UserQuestionSeedPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model UserVariant
 * 
 */
export type UserVariant = $Result.DefaultSelection<Prisma.$UserVariantPayload>
/**
 * Model UserVariantQuestion
 * 
 */
export type UserVariantQuestion = $Result.DefaultSelection<Prisma.$UserVariantQuestionPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TokenType: {
  TELEGRAM: 'TELEGRAM',
  EMAIL: 'EMAIL',
  DEACTIVATE: 'DEACTIVATE',
  PASSWORD_RECOVERY: 'PASSWORD_RECOVERY'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]


export const UserRating: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED',
  EXPERT: 'EXPERT'
};

export type UserRating = (typeof UserRating)[keyof typeof UserRating]


export const IsCorrectType: {
  FULL: 'FULL',
  PARTIAL: 'PARTIAL',
  WRONG: 'WRONG',
  NOCORRECT: 'NOCORRECT'
};

export type IsCorrectType = (typeof IsCorrectType)[keyof typeof IsCorrectType]

}

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

export type UserRating = $Enums.UserRating

export const UserRating: typeof $Enums.UserRating

export type IsCorrectType = $Enums.IsCorrectType

export const IsCorrectType: typeof $Enums.IsCorrectType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAnswer`: Exposes CRUD operations for the **UserAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAnswers
    * const userAnswers = await prisma.userAnswer.findMany()
    * ```
    */
  get userAnswer(): Prisma.UserAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userQuestionSeed`: Exposes CRUD operations for the **UserQuestionSeed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserQuestionSeeds
    * const userQuestionSeeds = await prisma.userQuestionSeed.findMany()
    * ```
    */
  get userQuestionSeed(): Prisma.UserQuestionSeedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userVariant`: Exposes CRUD operations for the **UserVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserVariants
    * const userVariants = await prisma.userVariant.findMany()
    * ```
    */
  get userVariant(): Prisma.UserVariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userVariantQuestion`: Exposes CRUD operations for the **UserVariantQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserVariantQuestions
    * const userVariantQuestions = await prisma.userVariantQuestion.findMany()
    * ```
    */
  get userVariantQuestion(): Prisma.UserVariantQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Question: 'Question',
    Subject: 'Subject',
    UserAnswer: 'UserAnswer',
    UserQuestionSeed: 'UserQuestionSeed',
    Task: 'Task',
    UserVariant: 'UserVariant',
    UserVariantQuestion: 'UserVariantQuestion',
    Token: 'Token'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "question" | "subject" | "userAnswer" | "userQuestionSeed" | "task" | "userVariant" | "userVariantQuestion" | "token"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      UserAnswer: {
        payload: Prisma.$UserAnswerPayload<ExtArgs>
        fields: Prisma.UserAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>
          }
          findFirst: {
            args: Prisma.UserAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>
          }
          findMany: {
            args: Prisma.UserAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>[]
          }
          create: {
            args: Prisma.UserAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>
          }
          createMany: {
            args: Prisma.UserAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>[]
          }
          delete: {
            args: Prisma.UserAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>
          }
          update: {
            args: Prisma.UserAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>
          }
          deleteMany: {
            args: Prisma.UserAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>[]
          }
          upsert: {
            args: Prisma.UserAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>
          }
          aggregate: {
            args: Prisma.UserAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAnswer>
          }
          groupBy: {
            args: Prisma.UserAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<UserAnswerCountAggregateOutputType> | number
          }
        }
      }
      UserQuestionSeed: {
        payload: Prisma.$UserQuestionSeedPayload<ExtArgs>
        fields: Prisma.UserQuestionSeedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserQuestionSeedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionSeedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserQuestionSeedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionSeedPayload>
          }
          findFirst: {
            args: Prisma.UserQuestionSeedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionSeedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserQuestionSeedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionSeedPayload>
          }
          findMany: {
            args: Prisma.UserQuestionSeedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionSeedPayload>[]
          }
          create: {
            args: Prisma.UserQuestionSeedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionSeedPayload>
          }
          createMany: {
            args: Prisma.UserQuestionSeedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserQuestionSeedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionSeedPayload>[]
          }
          delete: {
            args: Prisma.UserQuestionSeedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionSeedPayload>
          }
          update: {
            args: Prisma.UserQuestionSeedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionSeedPayload>
          }
          deleteMany: {
            args: Prisma.UserQuestionSeedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserQuestionSeedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserQuestionSeedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionSeedPayload>[]
          }
          upsert: {
            args: Prisma.UserQuestionSeedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionSeedPayload>
          }
          aggregate: {
            args: Prisma.UserQuestionSeedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserQuestionSeed>
          }
          groupBy: {
            args: Prisma.UserQuestionSeedGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserQuestionSeedGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserQuestionSeedCountArgs<ExtArgs>
            result: $Utils.Optional<UserQuestionSeedCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      UserVariant: {
        payload: Prisma.$UserVariantPayload<ExtArgs>
        fields: Prisma.UserVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantPayload>
          }
          findFirst: {
            args: Prisma.UserVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantPayload>
          }
          findMany: {
            args: Prisma.UserVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantPayload>[]
          }
          create: {
            args: Prisma.UserVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantPayload>
          }
          createMany: {
            args: Prisma.UserVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantPayload>[]
          }
          delete: {
            args: Prisma.UserVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantPayload>
          }
          update: {
            args: Prisma.UserVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantPayload>
          }
          deleteMany: {
            args: Prisma.UserVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserVariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantPayload>[]
          }
          upsert: {
            args: Prisma.UserVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantPayload>
          }
          aggregate: {
            args: Prisma.UserVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserVariant>
          }
          groupBy: {
            args: Prisma.UserVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserVariantCountArgs<ExtArgs>
            result: $Utils.Optional<UserVariantCountAggregateOutputType> | number
          }
        }
      }
      UserVariantQuestion: {
        payload: Prisma.$UserVariantQuestionPayload<ExtArgs>
        fields: Prisma.UserVariantQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserVariantQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserVariantQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantQuestionPayload>
          }
          findFirst: {
            args: Prisma.UserVariantQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserVariantQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantQuestionPayload>
          }
          findMany: {
            args: Prisma.UserVariantQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantQuestionPayload>[]
          }
          create: {
            args: Prisma.UserVariantQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantQuestionPayload>
          }
          createMany: {
            args: Prisma.UserVariantQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserVariantQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantQuestionPayload>[]
          }
          delete: {
            args: Prisma.UserVariantQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantQuestionPayload>
          }
          update: {
            args: Prisma.UserVariantQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantQuestionPayload>
          }
          deleteMany: {
            args: Prisma.UserVariantQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserVariantQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserVariantQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantQuestionPayload>[]
          }
          upsert: {
            args: Prisma.UserVariantQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVariantQuestionPayload>
          }
          aggregate: {
            args: Prisma.UserVariantQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserVariantQuestion>
          }
          groupBy: {
            args: Prisma.UserVariantQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserVariantQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserVariantQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<UserVariantQuestionCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    question?: QuestionOmit
    subject?: SubjectOmit
    userAnswer?: UserAnswerOmit
    userQuestionSeed?: UserQuestionSeedOmit
    task?: TaskOmit
    userVariant?: UserVariantOmit
    userVariantQuestion?: UserVariantQuestionOmit
    token?: TokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favoriteSubjects: number
    variant: number
    answers: number
    tokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoriteSubjects?: boolean | UserCountOutputTypeCountFavoriteSubjectsArgs
    variant?: boolean | UserCountOutputTypeCountVariantArgs
    answers?: boolean | UserCountOutputTypeCountAnswersArgs
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVariantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
    selectedInVariants: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
    selectedInVariants?: boolean | QuestionCountOutputTypeCountSelectedInVariantsArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswerWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountSelectedInVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVariantQuestionWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    questions: number
    users: number
    tasks: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | SubjectCountOutputTypeCountQuestionsArgs
    users?: boolean | SubjectCountOutputTypeCountUsersArgs
    tasks?: boolean | SubjectCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    questions: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | TaskCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type UserVariantCountOutputType
   */

  export type UserVariantCountOutputType = {
    questions: number
  }

  export type UserVariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | UserVariantCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * UserVariantCountOutputType without action
   */
  export type UserVariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantCountOutputType
     */
    select?: UserVariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserVariantCountOutputType without action
   */
  export type UserVariantCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVariantQuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    experience: number | null
  }

  export type UserSumAggregateOutputType = {
    experience: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    experience: number | null
    rating: $Enums.UserRating | null
    isDeactivated: boolean | null
    avatar: string | null
    telegramId: string | null
    isTwoFactor: boolean | null
    totpSecret: string | null
    tempTotpSecret: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    experience: number | null
    rating: $Enums.UserRating | null
    isDeactivated: boolean | null
    avatar: string | null
    telegramId: string | null
    isTwoFactor: boolean | null
    totpSecret: string | null
    tempTotpSecret: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    experience: number
    rating: number
    isDeactivated: number
    avatar: number
    telegramId: number
    isTwoFactor: number
    totpSecret: number
    tempTotpSecret: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    experience?: true
  }

  export type UserSumAggregateInputType = {
    experience?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    experience?: true
    rating?: true
    isDeactivated?: true
    avatar?: true
    telegramId?: true
    isTwoFactor?: true
    totpSecret?: true
    tempTotpSecret?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    experience?: true
    rating?: true
    isDeactivated?: true
    avatar?: true
    telegramId?: true
    isTwoFactor?: true
    totpSecret?: true
    tempTotpSecret?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    experience?: true
    rating?: true
    isDeactivated?: true
    avatar?: true
    telegramId?: true
    isTwoFactor?: true
    totpSecret?: true
    tempTotpSecret?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    experience: number
    rating: $Enums.UserRating
    isDeactivated: boolean
    avatar: string | null
    telegramId: string | null
    isTwoFactor: boolean
    totpSecret: string | null
    tempTotpSecret: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    experience?: boolean
    rating?: boolean
    isDeactivated?: boolean
    avatar?: boolean
    telegramId?: boolean
    isTwoFactor?: boolean
    totpSecret?: boolean
    tempTotpSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    favoriteSubjects?: boolean | User$favoriteSubjectsArgs<ExtArgs>
    variant?: boolean | User$variantArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    experience?: boolean
    rating?: boolean
    isDeactivated?: boolean
    avatar?: boolean
    telegramId?: boolean
    isTwoFactor?: boolean
    totpSecret?: boolean
    tempTotpSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    experience?: boolean
    rating?: boolean
    isDeactivated?: boolean
    avatar?: boolean
    telegramId?: boolean
    isTwoFactor?: boolean
    totpSecret?: boolean
    tempTotpSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    experience?: boolean
    rating?: boolean
    isDeactivated?: boolean
    avatar?: boolean
    telegramId?: boolean
    isTwoFactor?: boolean
    totpSecret?: boolean
    tempTotpSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "experience" | "rating" | "isDeactivated" | "avatar" | "telegramId" | "isTwoFactor" | "totpSecret" | "tempTotpSecret" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoriteSubjects?: boolean | User$favoriteSubjectsArgs<ExtArgs>
    variant?: boolean | User$variantArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      favoriteSubjects: Prisma.$SubjectPayload<ExtArgs>[]
      variant: Prisma.$UserVariantPayload<ExtArgs>[]
      answers: Prisma.$UserAnswerPayload<ExtArgs>[]
      tokens: Prisma.$TokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      experience: number
      rating: $Enums.UserRating
      isDeactivated: boolean
      avatar: string | null
      telegramId: string | null
      isTwoFactor: boolean
      totpSecret: string | null
      tempTotpSecret: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favoriteSubjects<T extends User$favoriteSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    variant<T extends User$variantArgs<ExtArgs> = {}>(args?: Subset<T, User$variantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends User$answersArgs<ExtArgs> = {}>(args?: Subset<T, User$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly experience: FieldRef<"User", 'Int'>
    readonly rating: FieldRef<"User", 'UserRating'>
    readonly isDeactivated: FieldRef<"User", 'Boolean'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly telegramId: FieldRef<"User", 'String'>
    readonly isTwoFactor: FieldRef<"User", 'Boolean'>
    readonly totpSecret: FieldRef<"User", 'String'>
    readonly tempTotpSecret: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.favoriteSubjects
   */
  export type User$favoriteSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * User.variant
   */
  export type User$variantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariant
     */
    select?: UserVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariant
     */
    omit?: UserVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantInclude<ExtArgs> | null
    where?: UserVariantWhereInput
    orderBy?: UserVariantOrderByWithRelationInput | UserVariantOrderByWithRelationInput[]
    cursor?: UserVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVariantScalarFieldEnum | UserVariantScalarFieldEnum[]
  }

  /**
   * User.answers
   */
  export type User$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    where?: UserAnswerWhereInput
    orderBy?: UserAnswerOrderByWithRelationInput | UserAnswerOrderByWithRelationInput[]
    cursor?: UserAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAnswerScalarFieldEnum | UserAnswerScalarFieldEnum[]
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    experience: number | null
    partialThreshold: number | null
  }

  export type QuestionSumAggregateOutputType = {
    experience: number | null
    partialThreshold: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    subjectId: string | null
    taskId: string | null
    type: string | null
    text: string | null
    question: string | null
    experience: number | null
    partialAllowed: boolean | null
    partialThreshold: number | null
    explanation: string | null
    hasCorrectAnswer: boolean | null
    audioPath: string | null
    imagePath: string | null
    intro: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    subjectId: string | null
    taskId: string | null
    type: string | null
    text: string | null
    question: string | null
    experience: number | null
    partialAllowed: boolean | null
    partialThreshold: number | null
    explanation: string | null
    hasCorrectAnswer: boolean | null
    audioPath: string | null
    imagePath: string | null
    intro: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    subjectId: number
    taskId: number
    type: number
    text: number
    question: number
    experience: number
    correctAnswer: number
    partialAllowed: number
    partialThreshold: number
    explanation: number
    hasCorrectAnswer: number
    audioPath: number
    imagePath: number
    intro: number
    speakers: number
    statements: number
    tableSpec: number
    images: number
    explanationImages: number
    globalImages: number
    subQuestions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    experience?: true
    partialThreshold?: true
  }

  export type QuestionSumAggregateInputType = {
    experience?: true
    partialThreshold?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    subjectId?: true
    taskId?: true
    type?: true
    text?: true
    question?: true
    experience?: true
    partialAllowed?: true
    partialThreshold?: true
    explanation?: true
    hasCorrectAnswer?: true
    audioPath?: true
    imagePath?: true
    intro?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    subjectId?: true
    taskId?: true
    type?: true
    text?: true
    question?: true
    experience?: true
    partialAllowed?: true
    partialThreshold?: true
    explanation?: true
    hasCorrectAnswer?: true
    audioPath?: true
    imagePath?: true
    intro?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    subjectId?: true
    taskId?: true
    type?: true
    text?: true
    question?: true
    experience?: true
    correctAnswer?: true
    partialAllowed?: true
    partialThreshold?: true
    explanation?: true
    hasCorrectAnswer?: true
    audioPath?: true
    imagePath?: true
    intro?: true
    speakers?: true
    statements?: true
    tableSpec?: true
    images?: true
    explanationImages?: true
    globalImages?: true
    subQuestions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    subjectId: string
    taskId: string
    type: string
    text: string | null
    question: string | null
    experience: number
    correctAnswer: string[]
    partialAllowed: boolean
    partialThreshold: number | null
    explanation: string | null
    hasCorrectAnswer: boolean
    audioPath: string | null
    imagePath: string | null
    intro: string | null
    speakers: JsonValue | null
    statements: JsonValue | null
    tableSpec: JsonValue | null
    images: string[]
    explanationImages: string[]
    globalImages: string[]
    subQuestions: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    taskId?: boolean
    type?: boolean
    text?: boolean
    question?: boolean
    experience?: boolean
    correctAnswer?: boolean
    partialAllowed?: boolean
    partialThreshold?: boolean
    explanation?: boolean
    hasCorrectAnswer?: boolean
    audioPath?: boolean
    imagePath?: boolean
    intro?: boolean
    speakers?: boolean
    statements?: boolean
    tableSpec?: boolean
    images?: boolean
    explanationImages?: boolean
    globalImages?: boolean
    subQuestions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    selectedInVariants?: boolean | Question$selectedInVariantsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    taskId?: boolean
    type?: boolean
    text?: boolean
    question?: boolean
    experience?: boolean
    correctAnswer?: boolean
    partialAllowed?: boolean
    partialThreshold?: boolean
    explanation?: boolean
    hasCorrectAnswer?: boolean
    audioPath?: boolean
    imagePath?: boolean
    intro?: boolean
    speakers?: boolean
    statements?: boolean
    tableSpec?: boolean
    images?: boolean
    explanationImages?: boolean
    globalImages?: boolean
    subQuestions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    taskId?: boolean
    type?: boolean
    text?: boolean
    question?: boolean
    experience?: boolean
    correctAnswer?: boolean
    partialAllowed?: boolean
    partialThreshold?: boolean
    explanation?: boolean
    hasCorrectAnswer?: boolean
    audioPath?: boolean
    imagePath?: boolean
    intro?: boolean
    speakers?: boolean
    statements?: boolean
    tableSpec?: boolean
    images?: boolean
    explanationImages?: boolean
    globalImages?: boolean
    subQuestions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    subjectId?: boolean
    taskId?: boolean
    type?: boolean
    text?: boolean
    question?: boolean
    experience?: boolean
    correctAnswer?: boolean
    partialAllowed?: boolean
    partialThreshold?: boolean
    explanation?: boolean
    hasCorrectAnswer?: boolean
    audioPath?: boolean
    imagePath?: boolean
    intro?: boolean
    speakers?: boolean
    statements?: boolean
    tableSpec?: boolean
    images?: boolean
    explanationImages?: boolean
    globalImages?: boolean
    subQuestions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subjectId" | "taskId" | "type" | "text" | "question" | "experience" | "correctAnswer" | "partialAllowed" | "partialThreshold" | "explanation" | "hasCorrectAnswer" | "audioPath" | "imagePath" | "intro" | "speakers" | "statements" | "tableSpec" | "images" | "explanationImages" | "globalImages" | "subQuestions" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    selectedInVariants?: boolean | Question$selectedInVariantsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
      answers: Prisma.$UserAnswerPayload<ExtArgs>[]
      selectedInVariants: Prisma.$UserVariantQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subjectId: string
      taskId: string
      type: string
      text: string | null
      question: string | null
      experience: number
      correctAnswer: string[]
      partialAllowed: boolean
      partialThreshold: number | null
      explanation: string | null
      hasCorrectAnswer: boolean
      audioPath: string | null
      imagePath: string | null
      intro: string | null
      speakers: Prisma.JsonValue | null
      statements: Prisma.JsonValue | null
      tableSpec: Prisma.JsonValue | null
      images: string[]
      explanationImages: string[]
      globalImages: string[]
      subQuestions: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    selectedInVariants<T extends Question$selectedInVariantsArgs<ExtArgs> = {}>(args?: Subset<T, Question$selectedInVariantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVariantQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly subjectId: FieldRef<"Question", 'String'>
    readonly taskId: FieldRef<"Question", 'String'>
    readonly type: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly question: FieldRef<"Question", 'String'>
    readonly experience: FieldRef<"Question", 'Int'>
    readonly correctAnswer: FieldRef<"Question", 'String[]'>
    readonly partialAllowed: FieldRef<"Question", 'Boolean'>
    readonly partialThreshold: FieldRef<"Question", 'Int'>
    readonly explanation: FieldRef<"Question", 'String'>
    readonly hasCorrectAnswer: FieldRef<"Question", 'Boolean'>
    readonly audioPath: FieldRef<"Question", 'String'>
    readonly imagePath: FieldRef<"Question", 'String'>
    readonly intro: FieldRef<"Question", 'String'>
    readonly speakers: FieldRef<"Question", 'Json'>
    readonly statements: FieldRef<"Question", 'Json'>
    readonly tableSpec: FieldRef<"Question", 'Json'>
    readonly images: FieldRef<"Question", 'String[]'>
    readonly explanationImages: FieldRef<"Question", 'String[]'>
    readonly globalImages: FieldRef<"Question", 'String[]'>
    readonly subQuestions: FieldRef<"Question", 'Json'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    where?: UserAnswerWhereInput
    orderBy?: UserAnswerOrderByWithRelationInput | UserAnswerOrderByWithRelationInput[]
    cursor?: UserAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAnswerScalarFieldEnum | UserAnswerScalarFieldEnum[]
  }

  /**
   * Question.selectedInVariants
   */
  export type Question$selectedInVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantQuestion
     */
    select?: UserVariantQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariantQuestion
     */
    omit?: UserVariantQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantQuestionInclude<ExtArgs> | null
    where?: UserVariantQuestionWhereInput
    orderBy?: UserVariantQuestionOrderByWithRelationInput | UserVariantQuestionOrderByWithRelationInput[]
    cursor?: UserVariantQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVariantQuestionScalarFieldEnum | UserVariantQuestionScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    tasksCount: number | null
    questionsCount: number | null
  }

  export type SubjectSumAggregateOutputType = {
    tasksCount: number | null
    questionsCount: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    tasksCount: number | null
    questionsCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    tasksCount: number | null
    questionsCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    tasksCount: number
    questionsCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    tasksCount?: true
    questionsCount?: true
  }

  export type SubjectSumAggregateInputType = {
    tasksCount?: true
    questionsCount?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    tasksCount?: true
    questionsCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    tasksCount?: true
    questionsCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    tasksCount?: true
    questionsCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: string
    name: string
    slug: string
    tasksCount: number
    questionsCount: number
    createdAt: Date
    updatedAt: Date
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    tasksCount?: boolean
    questionsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | Subject$questionsArgs<ExtArgs>
    users?: boolean | Subject$usersArgs<ExtArgs>
    tasks?: boolean | Subject$tasksArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    tasksCount?: boolean
    questionsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    tasksCount?: boolean
    questionsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    tasksCount?: boolean
    questionsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "tasksCount" | "questionsCount" | "createdAt" | "updatedAt", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Subject$questionsArgs<ExtArgs>
    users?: boolean | Subject$usersArgs<ExtArgs>
    tasks?: boolean | Subject$tasksArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      tasksCount: number
      questionsCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Subject$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Subject$usersArgs<ExtArgs> = {}>(args?: Subset<T, Subject$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Subject$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Subject$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'String'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly slug: FieldRef<"Subject", 'String'>
    readonly tasksCount: FieldRef<"Subject", 'Int'>
    readonly questionsCount: FieldRef<"Subject", 'Int'>
    readonly createdAt: FieldRef<"Subject", 'DateTime'>
    readonly updatedAt: FieldRef<"Subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.questions
   */
  export type Subject$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Subject.users
   */
  export type Subject$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Subject.tasks
   */
  export type Subject$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model UserAnswer
   */

  export type AggregateUserAnswer = {
    _count: UserAnswerCountAggregateOutputType | null
    _min: UserAnswerMinAggregateOutputType | null
    _max: UserAnswerMaxAggregateOutputType | null
  }

  export type UserAnswerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    answer: string | null
    isCorrect: $Enums.IsCorrectType | null
    subjectSlug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAnswerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    answer: string | null
    isCorrect: $Enums.IsCorrectType | null
    subjectSlug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAnswerCountAggregateOutputType = {
    id: number
    userId: number
    questionId: number
    answer: number
    isCorrect: number
    subjectSlug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAnswerMinAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    answer?: true
    isCorrect?: true
    subjectSlug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAnswerMaxAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    answer?: true
    isCorrect?: true
    subjectSlug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAnswerCountAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    answer?: true
    isCorrect?: true
    subjectSlug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnswer to aggregate.
     */
    where?: UserAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswerOrderByWithRelationInput | UserAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAnswers
    **/
    _count?: true | UserAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAnswerMaxAggregateInputType
  }

  export type GetUserAnswerAggregateType<T extends UserAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAnswer[P]>
      : GetScalarType<T[P], AggregateUserAnswer[P]>
  }




  export type UserAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswerWhereInput
    orderBy?: UserAnswerOrderByWithAggregationInput | UserAnswerOrderByWithAggregationInput[]
    by: UserAnswerScalarFieldEnum[] | UserAnswerScalarFieldEnum
    having?: UserAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAnswerCountAggregateInputType | true
    _min?: UserAnswerMinAggregateInputType
    _max?: UserAnswerMaxAggregateInputType
  }

  export type UserAnswerGroupByOutputType = {
    id: string
    userId: string
    questionId: string
    answer: string
    isCorrect: $Enums.IsCorrectType
    subjectSlug: string
    createdAt: Date
    updatedAt: Date
    _count: UserAnswerCountAggregateOutputType | null
    _min: UserAnswerMinAggregateOutputType | null
    _max: UserAnswerMaxAggregateOutputType | null
  }

  type GetUserAnswerGroupByPayload<T extends UserAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], UserAnswerGroupByOutputType[P]>
        }
      >
    >


  export type UserAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answer?: boolean
    isCorrect?: boolean
    subjectSlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswer"]>

  export type UserAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answer?: boolean
    isCorrect?: boolean
    subjectSlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswer"]>

  export type UserAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answer?: boolean
    isCorrect?: boolean
    subjectSlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswer"]>

  export type UserAnswerSelectScalar = {
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answer?: boolean
    isCorrect?: boolean
    subjectSlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "questionId" | "answer" | "isCorrect" | "subjectSlug" | "createdAt" | "updatedAt", ExtArgs["result"]["userAnswer"]>
  export type UserAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type UserAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type UserAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $UserAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAnswer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      questionId: string
      answer: string
      isCorrect: $Enums.IsCorrectType
      subjectSlug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userAnswer"]>
    composites: {}
  }

  type UserAnswerGetPayload<S extends boolean | null | undefined | UserAnswerDefaultArgs> = $Result.GetResult<Prisma.$UserAnswerPayload, S>

  type UserAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAnswerCountAggregateInputType | true
    }

  export interface UserAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAnswer'], meta: { name: 'UserAnswer' } }
    /**
     * Find zero or one UserAnswer that matches the filter.
     * @param {UserAnswerFindUniqueArgs} args - Arguments to find a UserAnswer
     * @example
     * // Get one UserAnswer
     * const userAnswer = await prisma.userAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAnswerFindUniqueArgs>(args: SelectSubset<T, UserAnswerFindUniqueArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAnswerFindUniqueOrThrowArgs} args - Arguments to find a UserAnswer
     * @example
     * // Get one UserAnswer
     * const userAnswer = await prisma.userAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswerFindFirstArgs} args - Arguments to find a UserAnswer
     * @example
     * // Get one UserAnswer
     * const userAnswer = await prisma.userAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAnswerFindFirstArgs>(args?: SelectSubset<T, UserAnswerFindFirstArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswerFindFirstOrThrowArgs} args - Arguments to find a UserAnswer
     * @example
     * // Get one UserAnswer
     * const userAnswer = await prisma.userAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAnswers
     * const userAnswers = await prisma.userAnswer.findMany()
     * 
     * // Get first 10 UserAnswers
     * const userAnswers = await prisma.userAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAnswerWithIdOnly = await prisma.userAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAnswerFindManyArgs>(args?: SelectSubset<T, UserAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAnswer.
     * @param {UserAnswerCreateArgs} args - Arguments to create a UserAnswer.
     * @example
     * // Create one UserAnswer
     * const UserAnswer = await prisma.userAnswer.create({
     *   data: {
     *     // ... data to create a UserAnswer
     *   }
     * })
     * 
     */
    create<T extends UserAnswerCreateArgs>(args: SelectSubset<T, UserAnswerCreateArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAnswers.
     * @param {UserAnswerCreateManyArgs} args - Arguments to create many UserAnswers.
     * @example
     * // Create many UserAnswers
     * const userAnswer = await prisma.userAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAnswerCreateManyArgs>(args?: SelectSubset<T, UserAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAnswers and returns the data saved in the database.
     * @param {UserAnswerCreateManyAndReturnArgs} args - Arguments to create many UserAnswers.
     * @example
     * // Create many UserAnswers
     * const userAnswer = await prisma.userAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAnswers and only return the `id`
     * const userAnswerWithIdOnly = await prisma.userAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAnswer.
     * @param {UserAnswerDeleteArgs} args - Arguments to delete one UserAnswer.
     * @example
     * // Delete one UserAnswer
     * const UserAnswer = await prisma.userAnswer.delete({
     *   where: {
     *     // ... filter to delete one UserAnswer
     *   }
     * })
     * 
     */
    delete<T extends UserAnswerDeleteArgs>(args: SelectSubset<T, UserAnswerDeleteArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAnswer.
     * @param {UserAnswerUpdateArgs} args - Arguments to update one UserAnswer.
     * @example
     * // Update one UserAnswer
     * const userAnswer = await prisma.userAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAnswerUpdateArgs>(args: SelectSubset<T, UserAnswerUpdateArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAnswers.
     * @param {UserAnswerDeleteManyArgs} args - Arguments to filter UserAnswers to delete.
     * @example
     * // Delete a few UserAnswers
     * const { count } = await prisma.userAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAnswerDeleteManyArgs>(args?: SelectSubset<T, UserAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAnswers
     * const userAnswer = await prisma.userAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAnswerUpdateManyArgs>(args: SelectSubset<T, UserAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAnswers and returns the data updated in the database.
     * @param {UserAnswerUpdateManyAndReturnArgs} args - Arguments to update many UserAnswers.
     * @example
     * // Update many UserAnswers
     * const userAnswer = await prisma.userAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAnswers and only return the `id`
     * const userAnswerWithIdOnly = await prisma.userAnswer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAnswer.
     * @param {UserAnswerUpsertArgs} args - Arguments to update or create a UserAnswer.
     * @example
     * // Update or create a UserAnswer
     * const userAnswer = await prisma.userAnswer.upsert({
     *   create: {
     *     // ... data to create a UserAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAnswer we want to update
     *   }
     * })
     */
    upsert<T extends UserAnswerUpsertArgs>(args: SelectSubset<T, UserAnswerUpsertArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswerCountArgs} args - Arguments to filter UserAnswers to count.
     * @example
     * // Count the number of UserAnswers
     * const count = await prisma.userAnswer.count({
     *   where: {
     *     // ... the filter for the UserAnswers we want to count
     *   }
     * })
    **/
    count<T extends UserAnswerCountArgs>(
      args?: Subset<T, UserAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAnswerAggregateArgs>(args: Subset<T, UserAnswerAggregateArgs>): Prisma.PrismaPromise<GetUserAnswerAggregateType<T>>

    /**
     * Group by UserAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAnswerGroupByArgs['orderBy'] }
        : { orderBy?: UserAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAnswer model
   */
  readonly fields: UserAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAnswer model
   */
  interface UserAnswerFieldRefs {
    readonly id: FieldRef<"UserAnswer", 'String'>
    readonly userId: FieldRef<"UserAnswer", 'String'>
    readonly questionId: FieldRef<"UserAnswer", 'String'>
    readonly answer: FieldRef<"UserAnswer", 'String'>
    readonly isCorrect: FieldRef<"UserAnswer", 'IsCorrectType'>
    readonly subjectSlug: FieldRef<"UserAnswer", 'String'>
    readonly createdAt: FieldRef<"UserAnswer", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAnswer findUnique
   */
  export type UserAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswer to fetch.
     */
    where: UserAnswerWhereUniqueInput
  }

  /**
   * UserAnswer findUniqueOrThrow
   */
  export type UserAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswer to fetch.
     */
    where: UserAnswerWhereUniqueInput
  }

  /**
   * UserAnswer findFirst
   */
  export type UserAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswer to fetch.
     */
    where?: UserAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswerOrderByWithRelationInput | UserAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnswers.
     */
    cursor?: UserAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnswers.
     */
    distinct?: UserAnswerScalarFieldEnum | UserAnswerScalarFieldEnum[]
  }

  /**
   * UserAnswer findFirstOrThrow
   */
  export type UserAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswer to fetch.
     */
    where?: UserAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswerOrderByWithRelationInput | UserAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnswers.
     */
    cursor?: UserAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnswers.
     */
    distinct?: UserAnswerScalarFieldEnum | UserAnswerScalarFieldEnum[]
  }

  /**
   * UserAnswer findMany
   */
  export type UserAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where?: UserAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswerOrderByWithRelationInput | UserAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAnswers.
     */
    cursor?: UserAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    distinct?: UserAnswerScalarFieldEnum | UserAnswerScalarFieldEnum[]
  }

  /**
   * UserAnswer create
   */
  export type UserAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAnswer.
     */
    data: XOR<UserAnswerCreateInput, UserAnswerUncheckedCreateInput>
  }

  /**
   * UserAnswer createMany
   */
  export type UserAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAnswers.
     */
    data: UserAnswerCreateManyInput | UserAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAnswer createManyAndReturn
   */
  export type UserAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many UserAnswers.
     */
    data: UserAnswerCreateManyInput | UserAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAnswer update
   */
  export type UserAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAnswer.
     */
    data: XOR<UserAnswerUpdateInput, UserAnswerUncheckedUpdateInput>
    /**
     * Choose, which UserAnswer to update.
     */
    where: UserAnswerWhereUniqueInput
  }

  /**
   * UserAnswer updateMany
   */
  export type UserAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAnswers.
     */
    data: XOR<UserAnswerUpdateManyMutationInput, UserAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserAnswers to update
     */
    where?: UserAnswerWhereInput
    /**
     * Limit how many UserAnswers to update.
     */
    limit?: number
  }

  /**
   * UserAnswer updateManyAndReturn
   */
  export type UserAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * The data used to update UserAnswers.
     */
    data: XOR<UserAnswerUpdateManyMutationInput, UserAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserAnswers to update
     */
    where?: UserAnswerWhereInput
    /**
     * Limit how many UserAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAnswer upsert
   */
  export type UserAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAnswer to update in case it exists.
     */
    where: UserAnswerWhereUniqueInput
    /**
     * In case the UserAnswer found by the `where` argument doesn't exist, create a new UserAnswer with this data.
     */
    create: XOR<UserAnswerCreateInput, UserAnswerUncheckedCreateInput>
    /**
     * In case the UserAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAnswerUpdateInput, UserAnswerUncheckedUpdateInput>
  }

  /**
   * UserAnswer delete
   */
  export type UserAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * Filter which UserAnswer to delete.
     */
    where: UserAnswerWhereUniqueInput
  }

  /**
   * UserAnswer deleteMany
   */
  export type UserAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnswers to delete
     */
    where?: UserAnswerWhereInput
    /**
     * Limit how many UserAnswers to delete.
     */
    limit?: number
  }

  /**
   * UserAnswer without action
   */
  export type UserAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
  }


  /**
   * Model UserQuestionSeed
   */

  export type AggregateUserQuestionSeed = {
    _count: UserQuestionSeedCountAggregateOutputType | null
    _avg: UserQuestionSeedAvgAggregateOutputType | null
    _sum: UserQuestionSeedSumAggregateOutputType | null
    _min: UserQuestionSeedMinAggregateOutputType | null
    _max: UserQuestionSeedMaxAggregateOutputType | null
  }

  export type UserQuestionSeedAvgAggregateOutputType = {
    id: number | null
    taskNumber: number | null
  }

  export type UserQuestionSeedSumAggregateOutputType = {
    id: number | null
    taskNumber: number | null
  }

  export type UserQuestionSeedMinAggregateOutputType = {
    id: number | null
    userId: string | null
    subjectId: string | null
    taskNumber: number | null
    createdAt: Date | null
  }

  export type UserQuestionSeedMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    subjectId: string | null
    taskNumber: number | null
    createdAt: Date | null
  }

  export type UserQuestionSeedCountAggregateOutputType = {
    id: number
    userId: number
    subjectId: number
    taskNumber: number
    order: number
    createdAt: number
    _all: number
  }


  export type UserQuestionSeedAvgAggregateInputType = {
    id?: true
    taskNumber?: true
  }

  export type UserQuestionSeedSumAggregateInputType = {
    id?: true
    taskNumber?: true
  }

  export type UserQuestionSeedMinAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    taskNumber?: true
    createdAt?: true
  }

  export type UserQuestionSeedMaxAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    taskNumber?: true
    createdAt?: true
  }

  export type UserQuestionSeedCountAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    taskNumber?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type UserQuestionSeedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuestionSeed to aggregate.
     */
    where?: UserQuestionSeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestionSeeds to fetch.
     */
    orderBy?: UserQuestionSeedOrderByWithRelationInput | UserQuestionSeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserQuestionSeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestionSeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestionSeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserQuestionSeeds
    **/
    _count?: true | UserQuestionSeedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserQuestionSeedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserQuestionSeedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserQuestionSeedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserQuestionSeedMaxAggregateInputType
  }

  export type GetUserQuestionSeedAggregateType<T extends UserQuestionSeedAggregateArgs> = {
        [P in keyof T & keyof AggregateUserQuestionSeed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQuestionSeed[P]>
      : GetScalarType<T[P], AggregateUserQuestionSeed[P]>
  }




  export type UserQuestionSeedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestionSeedWhereInput
    orderBy?: UserQuestionSeedOrderByWithAggregationInput | UserQuestionSeedOrderByWithAggregationInput[]
    by: UserQuestionSeedScalarFieldEnum[] | UserQuestionSeedScalarFieldEnum
    having?: UserQuestionSeedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserQuestionSeedCountAggregateInputType | true
    _avg?: UserQuestionSeedAvgAggregateInputType
    _sum?: UserQuestionSeedSumAggregateInputType
    _min?: UserQuestionSeedMinAggregateInputType
    _max?: UserQuestionSeedMaxAggregateInputType
  }

  export type UserQuestionSeedGroupByOutputType = {
    id: number
    userId: string
    subjectId: string
    taskNumber: number
    order: string[]
    createdAt: Date
    _count: UserQuestionSeedCountAggregateOutputType | null
    _avg: UserQuestionSeedAvgAggregateOutputType | null
    _sum: UserQuestionSeedSumAggregateOutputType | null
    _min: UserQuestionSeedMinAggregateOutputType | null
    _max: UserQuestionSeedMaxAggregateOutputType | null
  }

  type GetUserQuestionSeedGroupByPayload<T extends UserQuestionSeedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserQuestionSeedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserQuestionSeedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQuestionSeedGroupByOutputType[P]>
            : GetScalarType<T[P], UserQuestionSeedGroupByOutputType[P]>
        }
      >
    >


  export type UserQuestionSeedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    taskNumber?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userQuestionSeed"]>

  export type UserQuestionSeedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    taskNumber?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userQuestionSeed"]>

  export type UserQuestionSeedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    taskNumber?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userQuestionSeed"]>

  export type UserQuestionSeedSelectScalar = {
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    taskNumber?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type UserQuestionSeedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "subjectId" | "taskNumber" | "order" | "createdAt", ExtArgs["result"]["userQuestionSeed"]>

  export type $UserQuestionSeedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserQuestionSeed"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      subjectId: string
      taskNumber: number
      order: string[]
      createdAt: Date
    }, ExtArgs["result"]["userQuestionSeed"]>
    composites: {}
  }

  type UserQuestionSeedGetPayload<S extends boolean | null | undefined | UserQuestionSeedDefaultArgs> = $Result.GetResult<Prisma.$UserQuestionSeedPayload, S>

  type UserQuestionSeedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserQuestionSeedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserQuestionSeedCountAggregateInputType | true
    }

  export interface UserQuestionSeedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserQuestionSeed'], meta: { name: 'UserQuestionSeed' } }
    /**
     * Find zero or one UserQuestionSeed that matches the filter.
     * @param {UserQuestionSeedFindUniqueArgs} args - Arguments to find a UserQuestionSeed
     * @example
     * // Get one UserQuestionSeed
     * const userQuestionSeed = await prisma.userQuestionSeed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserQuestionSeedFindUniqueArgs>(args: SelectSubset<T, UserQuestionSeedFindUniqueArgs<ExtArgs>>): Prisma__UserQuestionSeedClient<$Result.GetResult<Prisma.$UserQuestionSeedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserQuestionSeed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserQuestionSeedFindUniqueOrThrowArgs} args - Arguments to find a UserQuestionSeed
     * @example
     * // Get one UserQuestionSeed
     * const userQuestionSeed = await prisma.userQuestionSeed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserQuestionSeedFindUniqueOrThrowArgs>(args: SelectSubset<T, UserQuestionSeedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserQuestionSeedClient<$Result.GetResult<Prisma.$UserQuestionSeedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuestionSeed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionSeedFindFirstArgs} args - Arguments to find a UserQuestionSeed
     * @example
     * // Get one UserQuestionSeed
     * const userQuestionSeed = await prisma.userQuestionSeed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserQuestionSeedFindFirstArgs>(args?: SelectSubset<T, UserQuestionSeedFindFirstArgs<ExtArgs>>): Prisma__UserQuestionSeedClient<$Result.GetResult<Prisma.$UserQuestionSeedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuestionSeed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionSeedFindFirstOrThrowArgs} args - Arguments to find a UserQuestionSeed
     * @example
     * // Get one UserQuestionSeed
     * const userQuestionSeed = await prisma.userQuestionSeed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserQuestionSeedFindFirstOrThrowArgs>(args?: SelectSubset<T, UserQuestionSeedFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserQuestionSeedClient<$Result.GetResult<Prisma.$UserQuestionSeedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserQuestionSeeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionSeedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQuestionSeeds
     * const userQuestionSeeds = await prisma.userQuestionSeed.findMany()
     * 
     * // Get first 10 UserQuestionSeeds
     * const userQuestionSeeds = await prisma.userQuestionSeed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userQuestionSeedWithIdOnly = await prisma.userQuestionSeed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserQuestionSeedFindManyArgs>(args?: SelectSubset<T, UserQuestionSeedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionSeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserQuestionSeed.
     * @param {UserQuestionSeedCreateArgs} args - Arguments to create a UserQuestionSeed.
     * @example
     * // Create one UserQuestionSeed
     * const UserQuestionSeed = await prisma.userQuestionSeed.create({
     *   data: {
     *     // ... data to create a UserQuestionSeed
     *   }
     * })
     * 
     */
    create<T extends UserQuestionSeedCreateArgs>(args: SelectSubset<T, UserQuestionSeedCreateArgs<ExtArgs>>): Prisma__UserQuestionSeedClient<$Result.GetResult<Prisma.$UserQuestionSeedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserQuestionSeeds.
     * @param {UserQuestionSeedCreateManyArgs} args - Arguments to create many UserQuestionSeeds.
     * @example
     * // Create many UserQuestionSeeds
     * const userQuestionSeed = await prisma.userQuestionSeed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserQuestionSeedCreateManyArgs>(args?: SelectSubset<T, UserQuestionSeedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserQuestionSeeds and returns the data saved in the database.
     * @param {UserQuestionSeedCreateManyAndReturnArgs} args - Arguments to create many UserQuestionSeeds.
     * @example
     * // Create many UserQuestionSeeds
     * const userQuestionSeed = await prisma.userQuestionSeed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserQuestionSeeds and only return the `id`
     * const userQuestionSeedWithIdOnly = await prisma.userQuestionSeed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserQuestionSeedCreateManyAndReturnArgs>(args?: SelectSubset<T, UserQuestionSeedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionSeedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserQuestionSeed.
     * @param {UserQuestionSeedDeleteArgs} args - Arguments to delete one UserQuestionSeed.
     * @example
     * // Delete one UserQuestionSeed
     * const UserQuestionSeed = await prisma.userQuestionSeed.delete({
     *   where: {
     *     // ... filter to delete one UserQuestionSeed
     *   }
     * })
     * 
     */
    delete<T extends UserQuestionSeedDeleteArgs>(args: SelectSubset<T, UserQuestionSeedDeleteArgs<ExtArgs>>): Prisma__UserQuestionSeedClient<$Result.GetResult<Prisma.$UserQuestionSeedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserQuestionSeed.
     * @param {UserQuestionSeedUpdateArgs} args - Arguments to update one UserQuestionSeed.
     * @example
     * // Update one UserQuestionSeed
     * const userQuestionSeed = await prisma.userQuestionSeed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserQuestionSeedUpdateArgs>(args: SelectSubset<T, UserQuestionSeedUpdateArgs<ExtArgs>>): Prisma__UserQuestionSeedClient<$Result.GetResult<Prisma.$UserQuestionSeedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserQuestionSeeds.
     * @param {UserQuestionSeedDeleteManyArgs} args - Arguments to filter UserQuestionSeeds to delete.
     * @example
     * // Delete a few UserQuestionSeeds
     * const { count } = await prisma.userQuestionSeed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserQuestionSeedDeleteManyArgs>(args?: SelectSubset<T, UserQuestionSeedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuestionSeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionSeedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQuestionSeeds
     * const userQuestionSeed = await prisma.userQuestionSeed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserQuestionSeedUpdateManyArgs>(args: SelectSubset<T, UserQuestionSeedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuestionSeeds and returns the data updated in the database.
     * @param {UserQuestionSeedUpdateManyAndReturnArgs} args - Arguments to update many UserQuestionSeeds.
     * @example
     * // Update many UserQuestionSeeds
     * const userQuestionSeed = await prisma.userQuestionSeed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserQuestionSeeds and only return the `id`
     * const userQuestionSeedWithIdOnly = await prisma.userQuestionSeed.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserQuestionSeedUpdateManyAndReturnArgs>(args: SelectSubset<T, UserQuestionSeedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionSeedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserQuestionSeed.
     * @param {UserQuestionSeedUpsertArgs} args - Arguments to update or create a UserQuestionSeed.
     * @example
     * // Update or create a UserQuestionSeed
     * const userQuestionSeed = await prisma.userQuestionSeed.upsert({
     *   create: {
     *     // ... data to create a UserQuestionSeed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQuestionSeed we want to update
     *   }
     * })
     */
    upsert<T extends UserQuestionSeedUpsertArgs>(args: SelectSubset<T, UserQuestionSeedUpsertArgs<ExtArgs>>): Prisma__UserQuestionSeedClient<$Result.GetResult<Prisma.$UserQuestionSeedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserQuestionSeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionSeedCountArgs} args - Arguments to filter UserQuestionSeeds to count.
     * @example
     * // Count the number of UserQuestionSeeds
     * const count = await prisma.userQuestionSeed.count({
     *   where: {
     *     // ... the filter for the UserQuestionSeeds we want to count
     *   }
     * })
    **/
    count<T extends UserQuestionSeedCountArgs>(
      args?: Subset<T, UserQuestionSeedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQuestionSeedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserQuestionSeed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionSeedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserQuestionSeedAggregateArgs>(args: Subset<T, UserQuestionSeedAggregateArgs>): Prisma.PrismaPromise<GetUserQuestionSeedAggregateType<T>>

    /**
     * Group by UserQuestionSeed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionSeedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserQuestionSeedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQuestionSeedGroupByArgs['orderBy'] }
        : { orderBy?: UserQuestionSeedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserQuestionSeedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserQuestionSeedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserQuestionSeed model
   */
  readonly fields: UserQuestionSeedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQuestionSeed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQuestionSeedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserQuestionSeed model
   */
  interface UserQuestionSeedFieldRefs {
    readonly id: FieldRef<"UserQuestionSeed", 'Int'>
    readonly userId: FieldRef<"UserQuestionSeed", 'String'>
    readonly subjectId: FieldRef<"UserQuestionSeed", 'String'>
    readonly taskNumber: FieldRef<"UserQuestionSeed", 'Int'>
    readonly order: FieldRef<"UserQuestionSeed", 'String[]'>
    readonly createdAt: FieldRef<"UserQuestionSeed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserQuestionSeed findUnique
   */
  export type UserQuestionSeedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionSeed
     */
    select?: UserQuestionSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionSeed
     */
    omit?: UserQuestionSeedOmit<ExtArgs> | null
    /**
     * Filter, which UserQuestionSeed to fetch.
     */
    where: UserQuestionSeedWhereUniqueInput
  }

  /**
   * UserQuestionSeed findUniqueOrThrow
   */
  export type UserQuestionSeedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionSeed
     */
    select?: UserQuestionSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionSeed
     */
    omit?: UserQuestionSeedOmit<ExtArgs> | null
    /**
     * Filter, which UserQuestionSeed to fetch.
     */
    where: UserQuestionSeedWhereUniqueInput
  }

  /**
   * UserQuestionSeed findFirst
   */
  export type UserQuestionSeedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionSeed
     */
    select?: UserQuestionSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionSeed
     */
    omit?: UserQuestionSeedOmit<ExtArgs> | null
    /**
     * Filter, which UserQuestionSeed to fetch.
     */
    where?: UserQuestionSeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestionSeeds to fetch.
     */
    orderBy?: UserQuestionSeedOrderByWithRelationInput | UserQuestionSeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuestionSeeds.
     */
    cursor?: UserQuestionSeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestionSeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestionSeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuestionSeeds.
     */
    distinct?: UserQuestionSeedScalarFieldEnum | UserQuestionSeedScalarFieldEnum[]
  }

  /**
   * UserQuestionSeed findFirstOrThrow
   */
  export type UserQuestionSeedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionSeed
     */
    select?: UserQuestionSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionSeed
     */
    omit?: UserQuestionSeedOmit<ExtArgs> | null
    /**
     * Filter, which UserQuestionSeed to fetch.
     */
    where?: UserQuestionSeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestionSeeds to fetch.
     */
    orderBy?: UserQuestionSeedOrderByWithRelationInput | UserQuestionSeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuestionSeeds.
     */
    cursor?: UserQuestionSeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestionSeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestionSeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuestionSeeds.
     */
    distinct?: UserQuestionSeedScalarFieldEnum | UserQuestionSeedScalarFieldEnum[]
  }

  /**
   * UserQuestionSeed findMany
   */
  export type UserQuestionSeedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionSeed
     */
    select?: UserQuestionSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionSeed
     */
    omit?: UserQuestionSeedOmit<ExtArgs> | null
    /**
     * Filter, which UserQuestionSeeds to fetch.
     */
    where?: UserQuestionSeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestionSeeds to fetch.
     */
    orderBy?: UserQuestionSeedOrderByWithRelationInput | UserQuestionSeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserQuestionSeeds.
     */
    cursor?: UserQuestionSeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestionSeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestionSeeds.
     */
    skip?: number
    distinct?: UserQuestionSeedScalarFieldEnum | UserQuestionSeedScalarFieldEnum[]
  }

  /**
   * UserQuestionSeed create
   */
  export type UserQuestionSeedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionSeed
     */
    select?: UserQuestionSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionSeed
     */
    omit?: UserQuestionSeedOmit<ExtArgs> | null
    /**
     * The data needed to create a UserQuestionSeed.
     */
    data: XOR<UserQuestionSeedCreateInput, UserQuestionSeedUncheckedCreateInput>
  }

  /**
   * UserQuestionSeed createMany
   */
  export type UserQuestionSeedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserQuestionSeeds.
     */
    data: UserQuestionSeedCreateManyInput | UserQuestionSeedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQuestionSeed createManyAndReturn
   */
  export type UserQuestionSeedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionSeed
     */
    select?: UserQuestionSeedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionSeed
     */
    omit?: UserQuestionSeedOmit<ExtArgs> | null
    /**
     * The data used to create many UserQuestionSeeds.
     */
    data: UserQuestionSeedCreateManyInput | UserQuestionSeedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQuestionSeed update
   */
  export type UserQuestionSeedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionSeed
     */
    select?: UserQuestionSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionSeed
     */
    omit?: UserQuestionSeedOmit<ExtArgs> | null
    /**
     * The data needed to update a UserQuestionSeed.
     */
    data: XOR<UserQuestionSeedUpdateInput, UserQuestionSeedUncheckedUpdateInput>
    /**
     * Choose, which UserQuestionSeed to update.
     */
    where: UserQuestionSeedWhereUniqueInput
  }

  /**
   * UserQuestionSeed updateMany
   */
  export type UserQuestionSeedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserQuestionSeeds.
     */
    data: XOR<UserQuestionSeedUpdateManyMutationInput, UserQuestionSeedUncheckedUpdateManyInput>
    /**
     * Filter which UserQuestionSeeds to update
     */
    where?: UserQuestionSeedWhereInput
    /**
     * Limit how many UserQuestionSeeds to update.
     */
    limit?: number
  }

  /**
   * UserQuestionSeed updateManyAndReturn
   */
  export type UserQuestionSeedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionSeed
     */
    select?: UserQuestionSeedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionSeed
     */
    omit?: UserQuestionSeedOmit<ExtArgs> | null
    /**
     * The data used to update UserQuestionSeeds.
     */
    data: XOR<UserQuestionSeedUpdateManyMutationInput, UserQuestionSeedUncheckedUpdateManyInput>
    /**
     * Filter which UserQuestionSeeds to update
     */
    where?: UserQuestionSeedWhereInput
    /**
     * Limit how many UserQuestionSeeds to update.
     */
    limit?: number
  }

  /**
   * UserQuestionSeed upsert
   */
  export type UserQuestionSeedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionSeed
     */
    select?: UserQuestionSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionSeed
     */
    omit?: UserQuestionSeedOmit<ExtArgs> | null
    /**
     * The filter to search for the UserQuestionSeed to update in case it exists.
     */
    where: UserQuestionSeedWhereUniqueInput
    /**
     * In case the UserQuestionSeed found by the `where` argument doesn't exist, create a new UserQuestionSeed with this data.
     */
    create: XOR<UserQuestionSeedCreateInput, UserQuestionSeedUncheckedCreateInput>
    /**
     * In case the UserQuestionSeed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQuestionSeedUpdateInput, UserQuestionSeedUncheckedUpdateInput>
  }

  /**
   * UserQuestionSeed delete
   */
  export type UserQuestionSeedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionSeed
     */
    select?: UserQuestionSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionSeed
     */
    omit?: UserQuestionSeedOmit<ExtArgs> | null
    /**
     * Filter which UserQuestionSeed to delete.
     */
    where: UserQuestionSeedWhereUniqueInput
  }

  /**
   * UserQuestionSeed deleteMany
   */
  export type UserQuestionSeedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuestionSeeds to delete
     */
    where?: UserQuestionSeedWhereInput
    /**
     * Limit how many UserQuestionSeeds to delete.
     */
    limit?: number
  }

  /**
   * UserQuestionSeed without action
   */
  export type UserQuestionSeedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionSeed
     */
    select?: UserQuestionSeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionSeed
     */
    omit?: UserQuestionSeedOmit<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    taskNumber: number | null
    questionsCount: number | null
  }

  export type TaskSumAggregateOutputType = {
    taskNumber: number | null
    questionsCount: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    taskNumber: number | null
    subjectId: string | null
    questionsCount: number | null
    createdAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    taskNumber: number | null
    subjectId: string | null
    questionsCount: number | null
    createdAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    taskNumber: number
    subjectId: number
    questionsCount: number
    createdAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    taskNumber?: true
    questionsCount?: true
  }

  export type TaskSumAggregateInputType = {
    taskNumber?: true
    questionsCount?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    taskNumber?: true
    subjectId?: true
    questionsCount?: true
    createdAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    taskNumber?: true
    subjectId?: true
    questionsCount?: true
    createdAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    taskNumber?: true
    subjectId?: true
    questionsCount?: true
    createdAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    taskNumber: number
    subjectId: string
    questionsCount: number
    createdAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskNumber?: boolean
    subjectId?: boolean
    questionsCount?: boolean
    createdAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    questions?: boolean | Task$questionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskNumber?: boolean
    subjectId?: boolean
    questionsCount?: boolean
    createdAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskNumber?: boolean
    subjectId?: boolean
    questionsCount?: boolean
    createdAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    taskNumber?: boolean
    subjectId?: boolean
    questionsCount?: boolean
    createdAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskNumber" | "subjectId" | "questionsCount" | "createdAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    questions?: boolean | Task$questionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskNumber: number
      subjectId: string
      questionsCount: number
      createdAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Task$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Task$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly taskNumber: FieldRef<"Task", 'Int'>
    readonly subjectId: FieldRef<"Task", 'String'>
    readonly questionsCount: FieldRef<"Task", 'Int'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.questions
   */
  export type Task$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model UserVariant
   */

  export type AggregateUserVariant = {
    _count: UserVariantCountAggregateOutputType | null
    _avg: UserVariantAvgAggregateOutputType | null
    _sum: UserVariantSumAggregateOutputType | null
    _min: UserVariantMinAggregateOutputType | null
    _max: UserVariantMaxAggregateOutputType | null
  }

  export type UserVariantAvgAggregateOutputType = {
    id: number | null
  }

  export type UserVariantSumAggregateOutputType = {
    id: number | null
  }

  export type UserVariantMinAggregateOutputType = {
    id: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserVariantMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserVariantCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserVariantAvgAggregateInputType = {
    id?: true
  }

  export type UserVariantSumAggregateInputType = {
    id?: true
  }

  export type UserVariantMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserVariantMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserVariantCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVariant to aggregate.
     */
    where?: UserVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVariants to fetch.
     */
    orderBy?: UserVariantOrderByWithRelationInput | UserVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserVariants
    **/
    _count?: true | UserVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserVariantMaxAggregateInputType
  }

  export type GetUserVariantAggregateType<T extends UserVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateUserVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserVariant[P]>
      : GetScalarType<T[P], AggregateUserVariant[P]>
  }




  export type UserVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVariantWhereInput
    orderBy?: UserVariantOrderByWithAggregationInput | UserVariantOrderByWithAggregationInput[]
    by: UserVariantScalarFieldEnum[] | UserVariantScalarFieldEnum
    having?: UserVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserVariantCountAggregateInputType | true
    _avg?: UserVariantAvgAggregateInputType
    _sum?: UserVariantSumAggregateInputType
    _min?: UserVariantMinAggregateInputType
    _max?: UserVariantMaxAggregateInputType
  }

  export type UserVariantGroupByOutputType = {
    id: number
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserVariantCountAggregateOutputType | null
    _avg: UserVariantAvgAggregateOutputType | null
    _sum: UserVariantSumAggregateOutputType | null
    _min: UserVariantMinAggregateOutputType | null
    _max: UserVariantMaxAggregateOutputType | null
  }

  type GetUserVariantGroupByPayload<T extends UserVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserVariantGroupByOutputType[P]>
            : GetScalarType<T[P], UserVariantGroupByOutputType[P]>
        }
      >
    >


  export type UserVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    questions?: boolean | UserVariant$questionsArgs<ExtArgs>
    _count?: boolean | UserVariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVariant"]>

  export type UserVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVariant"]>

  export type UserVariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVariant"]>

  export type UserVariantSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserVariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["userVariant"]>
  export type UserVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    questions?: boolean | UserVariant$questionsArgs<ExtArgs>
    _count?: boolean | UserVariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserVariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserVariant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      questions: Prisma.$UserVariantQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userVariant"]>
    composites: {}
  }

  type UserVariantGetPayload<S extends boolean | null | undefined | UserVariantDefaultArgs> = $Result.GetResult<Prisma.$UserVariantPayload, S>

  type UserVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserVariantCountAggregateInputType | true
    }

  export interface UserVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserVariant'], meta: { name: 'UserVariant' } }
    /**
     * Find zero or one UserVariant that matches the filter.
     * @param {UserVariantFindUniqueArgs} args - Arguments to find a UserVariant
     * @example
     * // Get one UserVariant
     * const userVariant = await prisma.userVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserVariantFindUniqueArgs>(args: SelectSubset<T, UserVariantFindUniqueArgs<ExtArgs>>): Prisma__UserVariantClient<$Result.GetResult<Prisma.$UserVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserVariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserVariantFindUniqueOrThrowArgs} args - Arguments to find a UserVariant
     * @example
     * // Get one UserVariant
     * const userVariant = await prisma.userVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, UserVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserVariantClient<$Result.GetResult<Prisma.$UserVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVariantFindFirstArgs} args - Arguments to find a UserVariant
     * @example
     * // Get one UserVariant
     * const userVariant = await prisma.userVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserVariantFindFirstArgs>(args?: SelectSubset<T, UserVariantFindFirstArgs<ExtArgs>>): Prisma__UserVariantClient<$Result.GetResult<Prisma.$UserVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVariantFindFirstOrThrowArgs} args - Arguments to find a UserVariant
     * @example
     * // Get one UserVariant
     * const userVariant = await prisma.userVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, UserVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserVariantClient<$Result.GetResult<Prisma.$UserVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserVariants
     * const userVariants = await prisma.userVariant.findMany()
     * 
     * // Get first 10 UserVariants
     * const userVariants = await prisma.userVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userVariantWithIdOnly = await prisma.userVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserVariantFindManyArgs>(args?: SelectSubset<T, UserVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserVariant.
     * @param {UserVariantCreateArgs} args - Arguments to create a UserVariant.
     * @example
     * // Create one UserVariant
     * const UserVariant = await prisma.userVariant.create({
     *   data: {
     *     // ... data to create a UserVariant
     *   }
     * })
     * 
     */
    create<T extends UserVariantCreateArgs>(args: SelectSubset<T, UserVariantCreateArgs<ExtArgs>>): Prisma__UserVariantClient<$Result.GetResult<Prisma.$UserVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserVariants.
     * @param {UserVariantCreateManyArgs} args - Arguments to create many UserVariants.
     * @example
     * // Create many UserVariants
     * const userVariant = await prisma.userVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserVariantCreateManyArgs>(args?: SelectSubset<T, UserVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserVariants and returns the data saved in the database.
     * @param {UserVariantCreateManyAndReturnArgs} args - Arguments to create many UserVariants.
     * @example
     * // Create many UserVariants
     * const userVariant = await prisma.userVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserVariants and only return the `id`
     * const userVariantWithIdOnly = await prisma.userVariant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, UserVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserVariant.
     * @param {UserVariantDeleteArgs} args - Arguments to delete one UserVariant.
     * @example
     * // Delete one UserVariant
     * const UserVariant = await prisma.userVariant.delete({
     *   where: {
     *     // ... filter to delete one UserVariant
     *   }
     * })
     * 
     */
    delete<T extends UserVariantDeleteArgs>(args: SelectSubset<T, UserVariantDeleteArgs<ExtArgs>>): Prisma__UserVariantClient<$Result.GetResult<Prisma.$UserVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserVariant.
     * @param {UserVariantUpdateArgs} args - Arguments to update one UserVariant.
     * @example
     * // Update one UserVariant
     * const userVariant = await prisma.userVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserVariantUpdateArgs>(args: SelectSubset<T, UserVariantUpdateArgs<ExtArgs>>): Prisma__UserVariantClient<$Result.GetResult<Prisma.$UserVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserVariants.
     * @param {UserVariantDeleteManyArgs} args - Arguments to filter UserVariants to delete.
     * @example
     * // Delete a few UserVariants
     * const { count } = await prisma.userVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserVariantDeleteManyArgs>(args?: SelectSubset<T, UserVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserVariants
     * const userVariant = await prisma.userVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserVariantUpdateManyArgs>(args: SelectSubset<T, UserVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVariants and returns the data updated in the database.
     * @param {UserVariantUpdateManyAndReturnArgs} args - Arguments to update many UserVariants.
     * @example
     * // Update many UserVariants
     * const userVariant = await prisma.userVariant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserVariants and only return the `id`
     * const userVariantWithIdOnly = await prisma.userVariant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserVariantUpdateManyAndReturnArgs>(args: SelectSubset<T, UserVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserVariant.
     * @param {UserVariantUpsertArgs} args - Arguments to update or create a UserVariant.
     * @example
     * // Update or create a UserVariant
     * const userVariant = await prisma.userVariant.upsert({
     *   create: {
     *     // ... data to create a UserVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserVariant we want to update
     *   }
     * })
     */
    upsert<T extends UserVariantUpsertArgs>(args: SelectSubset<T, UserVariantUpsertArgs<ExtArgs>>): Prisma__UserVariantClient<$Result.GetResult<Prisma.$UserVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVariantCountArgs} args - Arguments to filter UserVariants to count.
     * @example
     * // Count the number of UserVariants
     * const count = await prisma.userVariant.count({
     *   where: {
     *     // ... the filter for the UserVariants we want to count
     *   }
     * })
    **/
    count<T extends UserVariantCountArgs>(
      args?: Subset<T, UserVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserVariantAggregateArgs>(args: Subset<T, UserVariantAggregateArgs>): Prisma.PrismaPromise<GetUserVariantAggregateType<T>>

    /**
     * Group by UserVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserVariantGroupByArgs['orderBy'] }
        : { orderBy?: UserVariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserVariant model
   */
  readonly fields: UserVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends UserVariant$questionsArgs<ExtArgs> = {}>(args?: Subset<T, UserVariant$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVariantQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserVariant model
   */
  interface UserVariantFieldRefs {
    readonly id: FieldRef<"UserVariant", 'Int'>
    readonly userId: FieldRef<"UserVariant", 'String'>
    readonly createdAt: FieldRef<"UserVariant", 'DateTime'>
    readonly updatedAt: FieldRef<"UserVariant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserVariant findUnique
   */
  export type UserVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariant
     */
    select?: UserVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariant
     */
    omit?: UserVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantInclude<ExtArgs> | null
    /**
     * Filter, which UserVariant to fetch.
     */
    where: UserVariantWhereUniqueInput
  }

  /**
   * UserVariant findUniqueOrThrow
   */
  export type UserVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariant
     */
    select?: UserVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariant
     */
    omit?: UserVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantInclude<ExtArgs> | null
    /**
     * Filter, which UserVariant to fetch.
     */
    where: UserVariantWhereUniqueInput
  }

  /**
   * UserVariant findFirst
   */
  export type UserVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariant
     */
    select?: UserVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariant
     */
    omit?: UserVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantInclude<ExtArgs> | null
    /**
     * Filter, which UserVariant to fetch.
     */
    where?: UserVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVariants to fetch.
     */
    orderBy?: UserVariantOrderByWithRelationInput | UserVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVariants.
     */
    cursor?: UserVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVariants.
     */
    distinct?: UserVariantScalarFieldEnum | UserVariantScalarFieldEnum[]
  }

  /**
   * UserVariant findFirstOrThrow
   */
  export type UserVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariant
     */
    select?: UserVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariant
     */
    omit?: UserVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantInclude<ExtArgs> | null
    /**
     * Filter, which UserVariant to fetch.
     */
    where?: UserVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVariants to fetch.
     */
    orderBy?: UserVariantOrderByWithRelationInput | UserVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVariants.
     */
    cursor?: UserVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVariants.
     */
    distinct?: UserVariantScalarFieldEnum | UserVariantScalarFieldEnum[]
  }

  /**
   * UserVariant findMany
   */
  export type UserVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariant
     */
    select?: UserVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariant
     */
    omit?: UserVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantInclude<ExtArgs> | null
    /**
     * Filter, which UserVariants to fetch.
     */
    where?: UserVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVariants to fetch.
     */
    orderBy?: UserVariantOrderByWithRelationInput | UserVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserVariants.
     */
    cursor?: UserVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVariants.
     */
    skip?: number
    distinct?: UserVariantScalarFieldEnum | UserVariantScalarFieldEnum[]
  }

  /**
   * UserVariant create
   */
  export type UserVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariant
     */
    select?: UserVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariant
     */
    omit?: UserVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a UserVariant.
     */
    data: XOR<UserVariantCreateInput, UserVariantUncheckedCreateInput>
  }

  /**
   * UserVariant createMany
   */
  export type UserVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserVariants.
     */
    data: UserVariantCreateManyInput | UserVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserVariant createManyAndReturn
   */
  export type UserVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariant
     */
    select?: UserVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariant
     */
    omit?: UserVariantOmit<ExtArgs> | null
    /**
     * The data used to create many UserVariants.
     */
    data: UserVariantCreateManyInput | UserVariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserVariant update
   */
  export type UserVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariant
     */
    select?: UserVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariant
     */
    omit?: UserVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a UserVariant.
     */
    data: XOR<UserVariantUpdateInput, UserVariantUncheckedUpdateInput>
    /**
     * Choose, which UserVariant to update.
     */
    where: UserVariantWhereUniqueInput
  }

  /**
   * UserVariant updateMany
   */
  export type UserVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserVariants.
     */
    data: XOR<UserVariantUpdateManyMutationInput, UserVariantUncheckedUpdateManyInput>
    /**
     * Filter which UserVariants to update
     */
    where?: UserVariantWhereInput
    /**
     * Limit how many UserVariants to update.
     */
    limit?: number
  }

  /**
   * UserVariant updateManyAndReturn
   */
  export type UserVariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariant
     */
    select?: UserVariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariant
     */
    omit?: UserVariantOmit<ExtArgs> | null
    /**
     * The data used to update UserVariants.
     */
    data: XOR<UserVariantUpdateManyMutationInput, UserVariantUncheckedUpdateManyInput>
    /**
     * Filter which UserVariants to update
     */
    where?: UserVariantWhereInput
    /**
     * Limit how many UserVariants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserVariant upsert
   */
  export type UserVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariant
     */
    select?: UserVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariant
     */
    omit?: UserVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the UserVariant to update in case it exists.
     */
    where: UserVariantWhereUniqueInput
    /**
     * In case the UserVariant found by the `where` argument doesn't exist, create a new UserVariant with this data.
     */
    create: XOR<UserVariantCreateInput, UserVariantUncheckedCreateInput>
    /**
     * In case the UserVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserVariantUpdateInput, UserVariantUncheckedUpdateInput>
  }

  /**
   * UserVariant delete
   */
  export type UserVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariant
     */
    select?: UserVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariant
     */
    omit?: UserVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantInclude<ExtArgs> | null
    /**
     * Filter which UserVariant to delete.
     */
    where: UserVariantWhereUniqueInput
  }

  /**
   * UserVariant deleteMany
   */
  export type UserVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVariants to delete
     */
    where?: UserVariantWhereInput
    /**
     * Limit how many UserVariants to delete.
     */
    limit?: number
  }

  /**
   * UserVariant.questions
   */
  export type UserVariant$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantQuestion
     */
    select?: UserVariantQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariantQuestion
     */
    omit?: UserVariantQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantQuestionInclude<ExtArgs> | null
    where?: UserVariantQuestionWhereInput
    orderBy?: UserVariantQuestionOrderByWithRelationInput | UserVariantQuestionOrderByWithRelationInput[]
    cursor?: UserVariantQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVariantQuestionScalarFieldEnum | UserVariantQuestionScalarFieldEnum[]
  }

  /**
   * UserVariant without action
   */
  export type UserVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariant
     */
    select?: UserVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariant
     */
    omit?: UserVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantInclude<ExtArgs> | null
  }


  /**
   * Model UserVariantQuestion
   */

  export type AggregateUserVariantQuestion = {
    _count: UserVariantQuestionCountAggregateOutputType | null
    _avg: UserVariantQuestionAvgAggregateOutputType | null
    _sum: UserVariantQuestionSumAggregateOutputType | null
    _min: UserVariantQuestionMinAggregateOutputType | null
    _max: UserVariantQuestionMaxAggregateOutputType | null
  }

  export type UserVariantQuestionAvgAggregateOutputType = {
    variantId: number | null
    order: number | null
  }

  export type UserVariantQuestionSumAggregateOutputType = {
    variantId: number | null
    order: number | null
  }

  export type UserVariantQuestionMinAggregateOutputType = {
    id: string | null
    variantId: number | null
    questionId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserVariantQuestionMaxAggregateOutputType = {
    id: string | null
    variantId: number | null
    questionId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserVariantQuestionCountAggregateOutputType = {
    id: number
    variantId: number
    questionId: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserVariantQuestionAvgAggregateInputType = {
    variantId?: true
    order?: true
  }

  export type UserVariantQuestionSumAggregateInputType = {
    variantId?: true
    order?: true
  }

  export type UserVariantQuestionMinAggregateInputType = {
    id?: true
    variantId?: true
    questionId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserVariantQuestionMaxAggregateInputType = {
    id?: true
    variantId?: true
    questionId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserVariantQuestionCountAggregateInputType = {
    id?: true
    variantId?: true
    questionId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserVariantQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVariantQuestion to aggregate.
     */
    where?: UserVariantQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVariantQuestions to fetch.
     */
    orderBy?: UserVariantQuestionOrderByWithRelationInput | UserVariantQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserVariantQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVariantQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVariantQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserVariantQuestions
    **/
    _count?: true | UserVariantQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserVariantQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserVariantQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserVariantQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserVariantQuestionMaxAggregateInputType
  }

  export type GetUserVariantQuestionAggregateType<T extends UserVariantQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserVariantQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserVariantQuestion[P]>
      : GetScalarType<T[P], AggregateUserVariantQuestion[P]>
  }




  export type UserVariantQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVariantQuestionWhereInput
    orderBy?: UserVariantQuestionOrderByWithAggregationInput | UserVariantQuestionOrderByWithAggregationInput[]
    by: UserVariantQuestionScalarFieldEnum[] | UserVariantQuestionScalarFieldEnum
    having?: UserVariantQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserVariantQuestionCountAggregateInputType | true
    _avg?: UserVariantQuestionAvgAggregateInputType
    _sum?: UserVariantQuestionSumAggregateInputType
    _min?: UserVariantQuestionMinAggregateInputType
    _max?: UserVariantQuestionMaxAggregateInputType
  }

  export type UserVariantQuestionGroupByOutputType = {
    id: string
    variantId: number
    questionId: string
    order: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserVariantQuestionCountAggregateOutputType | null
    _avg: UserVariantQuestionAvgAggregateOutputType | null
    _sum: UserVariantQuestionSumAggregateOutputType | null
    _min: UserVariantQuestionMinAggregateOutputType | null
    _max: UserVariantQuestionMaxAggregateOutputType | null
  }

  type GetUserVariantQuestionGroupByPayload<T extends UserVariantQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserVariantQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserVariantQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserVariantQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], UserVariantQuestionGroupByOutputType[P]>
        }
      >
    >


  export type UserVariantQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    questionId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variant?: boolean | UserVariantDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVariantQuestion"]>

  export type UserVariantQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    questionId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variant?: boolean | UserVariantDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVariantQuestion"]>

  export type UserVariantQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    questionId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variant?: boolean | UserVariantDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVariantQuestion"]>

  export type UserVariantQuestionSelectScalar = {
    id?: boolean
    variantId?: boolean
    questionId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserVariantQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "variantId" | "questionId" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["userVariantQuestion"]>
  export type UserVariantQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | UserVariantDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type UserVariantQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | UserVariantDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type UserVariantQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | UserVariantDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $UserVariantQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserVariantQuestion"
    objects: {
      variant: Prisma.$UserVariantPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      variantId: number
      questionId: string
      order: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userVariantQuestion"]>
    composites: {}
  }

  type UserVariantQuestionGetPayload<S extends boolean | null | undefined | UserVariantQuestionDefaultArgs> = $Result.GetResult<Prisma.$UserVariantQuestionPayload, S>

  type UserVariantQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserVariantQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserVariantQuestionCountAggregateInputType | true
    }

  export interface UserVariantQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserVariantQuestion'], meta: { name: 'UserVariantQuestion' } }
    /**
     * Find zero or one UserVariantQuestion that matches the filter.
     * @param {UserVariantQuestionFindUniqueArgs} args - Arguments to find a UserVariantQuestion
     * @example
     * // Get one UserVariantQuestion
     * const userVariantQuestion = await prisma.userVariantQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserVariantQuestionFindUniqueArgs>(args: SelectSubset<T, UserVariantQuestionFindUniqueArgs<ExtArgs>>): Prisma__UserVariantQuestionClient<$Result.GetResult<Prisma.$UserVariantQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserVariantQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserVariantQuestionFindUniqueOrThrowArgs} args - Arguments to find a UserVariantQuestion
     * @example
     * // Get one UserVariantQuestion
     * const userVariantQuestion = await prisma.userVariantQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserVariantQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserVariantQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserVariantQuestionClient<$Result.GetResult<Prisma.$UserVariantQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVariantQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVariantQuestionFindFirstArgs} args - Arguments to find a UserVariantQuestion
     * @example
     * // Get one UserVariantQuestion
     * const userVariantQuestion = await prisma.userVariantQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserVariantQuestionFindFirstArgs>(args?: SelectSubset<T, UserVariantQuestionFindFirstArgs<ExtArgs>>): Prisma__UserVariantQuestionClient<$Result.GetResult<Prisma.$UserVariantQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVariantQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVariantQuestionFindFirstOrThrowArgs} args - Arguments to find a UserVariantQuestion
     * @example
     * // Get one UserVariantQuestion
     * const userVariantQuestion = await prisma.userVariantQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserVariantQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserVariantQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserVariantQuestionClient<$Result.GetResult<Prisma.$UserVariantQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserVariantQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVariantQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserVariantQuestions
     * const userVariantQuestions = await prisma.userVariantQuestion.findMany()
     * 
     * // Get first 10 UserVariantQuestions
     * const userVariantQuestions = await prisma.userVariantQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userVariantQuestionWithIdOnly = await prisma.userVariantQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserVariantQuestionFindManyArgs>(args?: SelectSubset<T, UserVariantQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVariantQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserVariantQuestion.
     * @param {UserVariantQuestionCreateArgs} args - Arguments to create a UserVariantQuestion.
     * @example
     * // Create one UserVariantQuestion
     * const UserVariantQuestion = await prisma.userVariantQuestion.create({
     *   data: {
     *     // ... data to create a UserVariantQuestion
     *   }
     * })
     * 
     */
    create<T extends UserVariantQuestionCreateArgs>(args: SelectSubset<T, UserVariantQuestionCreateArgs<ExtArgs>>): Prisma__UserVariantQuestionClient<$Result.GetResult<Prisma.$UserVariantQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserVariantQuestions.
     * @param {UserVariantQuestionCreateManyArgs} args - Arguments to create many UserVariantQuestions.
     * @example
     * // Create many UserVariantQuestions
     * const userVariantQuestion = await prisma.userVariantQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserVariantQuestionCreateManyArgs>(args?: SelectSubset<T, UserVariantQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserVariantQuestions and returns the data saved in the database.
     * @param {UserVariantQuestionCreateManyAndReturnArgs} args - Arguments to create many UserVariantQuestions.
     * @example
     * // Create many UserVariantQuestions
     * const userVariantQuestion = await prisma.userVariantQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserVariantQuestions and only return the `id`
     * const userVariantQuestionWithIdOnly = await prisma.userVariantQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserVariantQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserVariantQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVariantQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserVariantQuestion.
     * @param {UserVariantQuestionDeleteArgs} args - Arguments to delete one UserVariantQuestion.
     * @example
     * // Delete one UserVariantQuestion
     * const UserVariantQuestion = await prisma.userVariantQuestion.delete({
     *   where: {
     *     // ... filter to delete one UserVariantQuestion
     *   }
     * })
     * 
     */
    delete<T extends UserVariantQuestionDeleteArgs>(args: SelectSubset<T, UserVariantQuestionDeleteArgs<ExtArgs>>): Prisma__UserVariantQuestionClient<$Result.GetResult<Prisma.$UserVariantQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserVariantQuestion.
     * @param {UserVariantQuestionUpdateArgs} args - Arguments to update one UserVariantQuestion.
     * @example
     * // Update one UserVariantQuestion
     * const userVariantQuestion = await prisma.userVariantQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserVariantQuestionUpdateArgs>(args: SelectSubset<T, UserVariantQuestionUpdateArgs<ExtArgs>>): Prisma__UserVariantQuestionClient<$Result.GetResult<Prisma.$UserVariantQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserVariantQuestions.
     * @param {UserVariantQuestionDeleteManyArgs} args - Arguments to filter UserVariantQuestions to delete.
     * @example
     * // Delete a few UserVariantQuestions
     * const { count } = await prisma.userVariantQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserVariantQuestionDeleteManyArgs>(args?: SelectSubset<T, UserVariantQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVariantQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVariantQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserVariantQuestions
     * const userVariantQuestion = await prisma.userVariantQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserVariantQuestionUpdateManyArgs>(args: SelectSubset<T, UserVariantQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVariantQuestions and returns the data updated in the database.
     * @param {UserVariantQuestionUpdateManyAndReturnArgs} args - Arguments to update many UserVariantQuestions.
     * @example
     * // Update many UserVariantQuestions
     * const userVariantQuestion = await prisma.userVariantQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserVariantQuestions and only return the `id`
     * const userVariantQuestionWithIdOnly = await prisma.userVariantQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserVariantQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserVariantQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVariantQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserVariantQuestion.
     * @param {UserVariantQuestionUpsertArgs} args - Arguments to update or create a UserVariantQuestion.
     * @example
     * // Update or create a UserVariantQuestion
     * const userVariantQuestion = await prisma.userVariantQuestion.upsert({
     *   create: {
     *     // ... data to create a UserVariantQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserVariantQuestion we want to update
     *   }
     * })
     */
    upsert<T extends UserVariantQuestionUpsertArgs>(args: SelectSubset<T, UserVariantQuestionUpsertArgs<ExtArgs>>): Prisma__UserVariantQuestionClient<$Result.GetResult<Prisma.$UserVariantQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserVariantQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVariantQuestionCountArgs} args - Arguments to filter UserVariantQuestions to count.
     * @example
     * // Count the number of UserVariantQuestions
     * const count = await prisma.userVariantQuestion.count({
     *   where: {
     *     // ... the filter for the UserVariantQuestions we want to count
     *   }
     * })
    **/
    count<T extends UserVariantQuestionCountArgs>(
      args?: Subset<T, UserVariantQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserVariantQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserVariantQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVariantQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserVariantQuestionAggregateArgs>(args: Subset<T, UserVariantQuestionAggregateArgs>): Prisma.PrismaPromise<GetUserVariantQuestionAggregateType<T>>

    /**
     * Group by UserVariantQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVariantQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserVariantQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserVariantQuestionGroupByArgs['orderBy'] }
        : { orderBy?: UserVariantQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserVariantQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserVariantQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserVariantQuestion model
   */
  readonly fields: UserVariantQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserVariantQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserVariantQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends UserVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserVariantDefaultArgs<ExtArgs>>): Prisma__UserVariantClient<$Result.GetResult<Prisma.$UserVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserVariantQuestion model
   */
  interface UserVariantQuestionFieldRefs {
    readonly id: FieldRef<"UserVariantQuestion", 'String'>
    readonly variantId: FieldRef<"UserVariantQuestion", 'Int'>
    readonly questionId: FieldRef<"UserVariantQuestion", 'String'>
    readonly order: FieldRef<"UserVariantQuestion", 'Int'>
    readonly createdAt: FieldRef<"UserVariantQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"UserVariantQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserVariantQuestion findUnique
   */
  export type UserVariantQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantQuestion
     */
    select?: UserVariantQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariantQuestion
     */
    omit?: UserVariantQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserVariantQuestion to fetch.
     */
    where: UserVariantQuestionWhereUniqueInput
  }

  /**
   * UserVariantQuestion findUniqueOrThrow
   */
  export type UserVariantQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantQuestion
     */
    select?: UserVariantQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariantQuestion
     */
    omit?: UserVariantQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserVariantQuestion to fetch.
     */
    where: UserVariantQuestionWhereUniqueInput
  }

  /**
   * UserVariantQuestion findFirst
   */
  export type UserVariantQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantQuestion
     */
    select?: UserVariantQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariantQuestion
     */
    omit?: UserVariantQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserVariantQuestion to fetch.
     */
    where?: UserVariantQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVariantQuestions to fetch.
     */
    orderBy?: UserVariantQuestionOrderByWithRelationInput | UserVariantQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVariantQuestions.
     */
    cursor?: UserVariantQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVariantQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVariantQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVariantQuestions.
     */
    distinct?: UserVariantQuestionScalarFieldEnum | UserVariantQuestionScalarFieldEnum[]
  }

  /**
   * UserVariantQuestion findFirstOrThrow
   */
  export type UserVariantQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantQuestion
     */
    select?: UserVariantQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariantQuestion
     */
    omit?: UserVariantQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserVariantQuestion to fetch.
     */
    where?: UserVariantQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVariantQuestions to fetch.
     */
    orderBy?: UserVariantQuestionOrderByWithRelationInput | UserVariantQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVariantQuestions.
     */
    cursor?: UserVariantQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVariantQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVariantQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVariantQuestions.
     */
    distinct?: UserVariantQuestionScalarFieldEnum | UserVariantQuestionScalarFieldEnum[]
  }

  /**
   * UserVariantQuestion findMany
   */
  export type UserVariantQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantQuestion
     */
    select?: UserVariantQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariantQuestion
     */
    omit?: UserVariantQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserVariantQuestions to fetch.
     */
    where?: UserVariantQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVariantQuestions to fetch.
     */
    orderBy?: UserVariantQuestionOrderByWithRelationInput | UserVariantQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserVariantQuestions.
     */
    cursor?: UserVariantQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVariantQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVariantQuestions.
     */
    skip?: number
    distinct?: UserVariantQuestionScalarFieldEnum | UserVariantQuestionScalarFieldEnum[]
  }

  /**
   * UserVariantQuestion create
   */
  export type UserVariantQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantQuestion
     */
    select?: UserVariantQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariantQuestion
     */
    omit?: UserVariantQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserVariantQuestion.
     */
    data: XOR<UserVariantQuestionCreateInput, UserVariantQuestionUncheckedCreateInput>
  }

  /**
   * UserVariantQuestion createMany
   */
  export type UserVariantQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserVariantQuestions.
     */
    data: UserVariantQuestionCreateManyInput | UserVariantQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserVariantQuestion createManyAndReturn
   */
  export type UserVariantQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantQuestion
     */
    select?: UserVariantQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariantQuestion
     */
    omit?: UserVariantQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many UserVariantQuestions.
     */
    data: UserVariantQuestionCreateManyInput | UserVariantQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserVariantQuestion update
   */
  export type UserVariantQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantQuestion
     */
    select?: UserVariantQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariantQuestion
     */
    omit?: UserVariantQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserVariantQuestion.
     */
    data: XOR<UserVariantQuestionUpdateInput, UserVariantQuestionUncheckedUpdateInput>
    /**
     * Choose, which UserVariantQuestion to update.
     */
    where: UserVariantQuestionWhereUniqueInput
  }

  /**
   * UserVariantQuestion updateMany
   */
  export type UserVariantQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserVariantQuestions.
     */
    data: XOR<UserVariantQuestionUpdateManyMutationInput, UserVariantQuestionUncheckedUpdateManyInput>
    /**
     * Filter which UserVariantQuestions to update
     */
    where?: UserVariantQuestionWhereInput
    /**
     * Limit how many UserVariantQuestions to update.
     */
    limit?: number
  }

  /**
   * UserVariantQuestion updateManyAndReturn
   */
  export type UserVariantQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantQuestion
     */
    select?: UserVariantQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariantQuestion
     */
    omit?: UserVariantQuestionOmit<ExtArgs> | null
    /**
     * The data used to update UserVariantQuestions.
     */
    data: XOR<UserVariantQuestionUpdateManyMutationInput, UserVariantQuestionUncheckedUpdateManyInput>
    /**
     * Filter which UserVariantQuestions to update
     */
    where?: UserVariantQuestionWhereInput
    /**
     * Limit how many UserVariantQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserVariantQuestion upsert
   */
  export type UserVariantQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantQuestion
     */
    select?: UserVariantQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariantQuestion
     */
    omit?: UserVariantQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserVariantQuestion to update in case it exists.
     */
    where: UserVariantQuestionWhereUniqueInput
    /**
     * In case the UserVariantQuestion found by the `where` argument doesn't exist, create a new UserVariantQuestion with this data.
     */
    create: XOR<UserVariantQuestionCreateInput, UserVariantQuestionUncheckedCreateInput>
    /**
     * In case the UserVariantQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserVariantQuestionUpdateInput, UserVariantQuestionUncheckedUpdateInput>
  }

  /**
   * UserVariantQuestion delete
   */
  export type UserVariantQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantQuestion
     */
    select?: UserVariantQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariantQuestion
     */
    omit?: UserVariantQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantQuestionInclude<ExtArgs> | null
    /**
     * Filter which UserVariantQuestion to delete.
     */
    where: UserVariantQuestionWhereUniqueInput
  }

  /**
   * UserVariantQuestion deleteMany
   */
  export type UserVariantQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVariantQuestions to delete
     */
    where?: UserVariantQuestionWhereInput
    /**
     * Limit how many UserVariantQuestions to delete.
     */
    limit?: number
  }

  /**
   * UserVariantQuestion without action
   */
  export type UserVariantQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVariantQuestion
     */
    select?: UserVariantQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVariantQuestion
     */
    omit?: UserVariantQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVariantQuestionInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    used: boolean | null
    expiresAt: Date | null
    tokenValue: string | null
    type: $Enums.TokenType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    used: boolean | null
    expiresAt: Date | null
    tokenValue: string | null
    type: $Enums.TokenType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    userId: number
    used: number
    expiresAt: number
    tokenValue: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    userId?: true
    used?: true
    expiresAt?: true
    tokenValue?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    userId?: true
    used?: true
    expiresAt?: true
    tokenValue?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    userId?: true
    used?: true
    expiresAt?: true
    tokenValue?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    userId: string
    used: boolean
    expiresAt: Date | null
    tokenValue: string
    type: $Enums.TokenType
    createdAt: Date
    updatedAt: Date
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    used?: boolean
    expiresAt?: boolean
    tokenValue?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    used?: boolean
    expiresAt?: boolean
    tokenValue?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    used?: boolean
    expiresAt?: boolean
    tokenValue?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    userId?: boolean
    used?: boolean
    expiresAt?: boolean
    tokenValue?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "used" | "expiresAt" | "tokenValue" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      used: boolean
      expiresAt: Date | null
      tokenValue: string
      type: $Enums.TokenType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly userId: FieldRef<"Token", 'String'>
    readonly used: FieldRef<"Token", 'Boolean'>
    readonly expiresAt: FieldRef<"Token", 'DateTime'>
    readonly tokenValue: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'TokenType'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly updatedAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    experience: 'experience',
    rating: 'rating',
    isDeactivated: 'isDeactivated',
    avatar: 'avatar',
    telegramId: 'telegramId',
    isTwoFactor: 'isTwoFactor',
    totpSecret: 'totpSecret',
    tempTotpSecret: 'tempTotpSecret',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    subjectId: 'subjectId',
    taskId: 'taskId',
    type: 'type',
    text: 'text',
    question: 'question',
    experience: 'experience',
    correctAnswer: 'correctAnswer',
    partialAllowed: 'partialAllowed',
    partialThreshold: 'partialThreshold',
    explanation: 'explanation',
    hasCorrectAnswer: 'hasCorrectAnswer',
    audioPath: 'audioPath',
    imagePath: 'imagePath',
    intro: 'intro',
    speakers: 'speakers',
    statements: 'statements',
    tableSpec: 'tableSpec',
    images: 'images',
    explanationImages: 'explanationImages',
    globalImages: 'globalImages',
    subQuestions: 'subQuestions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    tasksCount: 'tasksCount',
    questionsCount: 'questionsCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const UserAnswerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questionId: 'questionId',
    answer: 'answer',
    isCorrect: 'isCorrect',
    subjectSlug: 'subjectSlug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserAnswerScalarFieldEnum = (typeof UserAnswerScalarFieldEnum)[keyof typeof UserAnswerScalarFieldEnum]


  export const UserQuestionSeedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subjectId: 'subjectId',
    taskNumber: 'taskNumber',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type UserQuestionSeedScalarFieldEnum = (typeof UserQuestionSeedScalarFieldEnum)[keyof typeof UserQuestionSeedScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    taskNumber: 'taskNumber',
    subjectId: 'subjectId',
    questionsCount: 'questionsCount',
    createdAt: 'createdAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const UserVariantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserVariantScalarFieldEnum = (typeof UserVariantScalarFieldEnum)[keyof typeof UserVariantScalarFieldEnum]


  export const UserVariantQuestionScalarFieldEnum: {
    id: 'id',
    variantId: 'variantId',
    questionId: 'questionId',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserVariantQuestionScalarFieldEnum = (typeof UserVariantQuestionScalarFieldEnum)[keyof typeof UserVariantQuestionScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    used: 'used',
    expiresAt: 'expiresAt',
    tokenValue: 'tokenValue',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'UserRating'
   */
  export type EnumUserRatingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRating'>
    


  /**
   * Reference to a field of type 'UserRating[]'
   */
  export type ListEnumUserRatingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRating[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'IsCorrectType'
   */
  export type EnumIsCorrectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IsCorrectType'>
    


  /**
   * Reference to a field of type 'IsCorrectType[]'
   */
  export type ListEnumIsCorrectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IsCorrectType[]'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    experience?: IntFilter<"User"> | number
    rating?: EnumUserRatingFilter<"User"> | $Enums.UserRating
    isDeactivated?: BoolFilter<"User"> | boolean
    avatar?: StringNullableFilter<"User"> | string | null
    telegramId?: StringNullableFilter<"User"> | string | null
    isTwoFactor?: BoolFilter<"User"> | boolean
    totpSecret?: StringNullableFilter<"User"> | string | null
    tempTotpSecret?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    favoriteSubjects?: SubjectListRelationFilter
    variant?: UserVariantListRelationFilter
    answers?: UserAnswerListRelationFilter
    tokens?: TokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    experience?: SortOrder
    rating?: SortOrder
    isDeactivated?: SortOrder
    avatar?: SortOrderInput | SortOrder
    telegramId?: SortOrderInput | SortOrder
    isTwoFactor?: SortOrder
    totpSecret?: SortOrderInput | SortOrder
    tempTotpSecret?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    favoriteSubjects?: SubjectOrderByRelationAggregateInput
    variant?: UserVariantOrderByRelationAggregateInput
    answers?: UserAnswerOrderByRelationAggregateInput
    tokens?: TokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    telegramId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    experience?: IntFilter<"User"> | number
    rating?: EnumUserRatingFilter<"User"> | $Enums.UserRating
    isDeactivated?: BoolFilter<"User"> | boolean
    avatar?: StringNullableFilter<"User"> | string | null
    isTwoFactor?: BoolFilter<"User"> | boolean
    totpSecret?: StringNullableFilter<"User"> | string | null
    tempTotpSecret?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    favoriteSubjects?: SubjectListRelationFilter
    variant?: UserVariantListRelationFilter
    answers?: UserAnswerListRelationFilter
    tokens?: TokenListRelationFilter
  }, "id" | "email" | "telegramId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    experience?: SortOrder
    rating?: SortOrder
    isDeactivated?: SortOrder
    avatar?: SortOrderInput | SortOrder
    telegramId?: SortOrderInput | SortOrder
    isTwoFactor?: SortOrder
    totpSecret?: SortOrderInput | SortOrder
    tempTotpSecret?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    experience?: IntWithAggregatesFilter<"User"> | number
    rating?: EnumUserRatingWithAggregatesFilter<"User"> | $Enums.UserRating
    isDeactivated?: BoolWithAggregatesFilter<"User"> | boolean
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    telegramId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isTwoFactor?: BoolWithAggregatesFilter<"User"> | boolean
    totpSecret?: StringNullableWithAggregatesFilter<"User"> | string | null
    tempTotpSecret?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    subjectId?: StringFilter<"Question"> | string
    taskId?: StringFilter<"Question"> | string
    type?: StringFilter<"Question"> | string
    text?: StringNullableFilter<"Question"> | string | null
    question?: StringNullableFilter<"Question"> | string | null
    experience?: IntFilter<"Question"> | number
    correctAnswer?: StringNullableListFilter<"Question">
    partialAllowed?: BoolFilter<"Question"> | boolean
    partialThreshold?: IntNullableFilter<"Question"> | number | null
    explanation?: StringNullableFilter<"Question"> | string | null
    hasCorrectAnswer?: BoolFilter<"Question"> | boolean
    audioPath?: StringNullableFilter<"Question"> | string | null
    imagePath?: StringNullableFilter<"Question"> | string | null
    intro?: StringNullableFilter<"Question"> | string | null
    speakers?: JsonNullableFilter<"Question">
    statements?: JsonNullableFilter<"Question">
    tableSpec?: JsonNullableFilter<"Question">
    images?: StringNullableListFilter<"Question">
    explanationImages?: StringNullableListFilter<"Question">
    globalImages?: StringNullableListFilter<"Question">
    subQuestions?: JsonNullableFilter<"Question">
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    answers?: UserAnswerListRelationFilter
    selectedInVariants?: UserVariantQuestionListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    taskId?: SortOrder
    type?: SortOrder
    text?: SortOrderInput | SortOrder
    question?: SortOrderInput | SortOrder
    experience?: SortOrder
    correctAnswer?: SortOrder
    partialAllowed?: SortOrder
    partialThreshold?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    hasCorrectAnswer?: SortOrder
    audioPath?: SortOrderInput | SortOrder
    imagePath?: SortOrderInput | SortOrder
    intro?: SortOrderInput | SortOrder
    speakers?: SortOrderInput | SortOrder
    statements?: SortOrderInput | SortOrder
    tableSpec?: SortOrderInput | SortOrder
    images?: SortOrder
    explanationImages?: SortOrder
    globalImages?: SortOrder
    subQuestions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
    answers?: UserAnswerOrderByRelationAggregateInput
    selectedInVariants?: UserVariantQuestionOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    subjectId?: StringFilter<"Question"> | string
    taskId?: StringFilter<"Question"> | string
    type?: StringFilter<"Question"> | string
    text?: StringNullableFilter<"Question"> | string | null
    question?: StringNullableFilter<"Question"> | string | null
    experience?: IntFilter<"Question"> | number
    correctAnswer?: StringNullableListFilter<"Question">
    partialAllowed?: BoolFilter<"Question"> | boolean
    partialThreshold?: IntNullableFilter<"Question"> | number | null
    explanation?: StringNullableFilter<"Question"> | string | null
    hasCorrectAnswer?: BoolFilter<"Question"> | boolean
    audioPath?: StringNullableFilter<"Question"> | string | null
    imagePath?: StringNullableFilter<"Question"> | string | null
    intro?: StringNullableFilter<"Question"> | string | null
    speakers?: JsonNullableFilter<"Question">
    statements?: JsonNullableFilter<"Question">
    tableSpec?: JsonNullableFilter<"Question">
    images?: StringNullableListFilter<"Question">
    explanationImages?: StringNullableListFilter<"Question">
    globalImages?: StringNullableListFilter<"Question">
    subQuestions?: JsonNullableFilter<"Question">
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    answers?: UserAnswerListRelationFilter
    selectedInVariants?: UserVariantQuestionListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    taskId?: SortOrder
    type?: SortOrder
    text?: SortOrderInput | SortOrder
    question?: SortOrderInput | SortOrder
    experience?: SortOrder
    correctAnswer?: SortOrder
    partialAllowed?: SortOrder
    partialThreshold?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    hasCorrectAnswer?: SortOrder
    audioPath?: SortOrderInput | SortOrder
    imagePath?: SortOrderInput | SortOrder
    intro?: SortOrderInput | SortOrder
    speakers?: SortOrderInput | SortOrder
    statements?: SortOrderInput | SortOrder
    tableSpec?: SortOrderInput | SortOrder
    images?: SortOrder
    explanationImages?: SortOrder
    globalImages?: SortOrder
    subQuestions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    subjectId?: StringWithAggregatesFilter<"Question"> | string
    taskId?: StringWithAggregatesFilter<"Question"> | string
    type?: StringWithAggregatesFilter<"Question"> | string
    text?: StringNullableWithAggregatesFilter<"Question"> | string | null
    question?: StringNullableWithAggregatesFilter<"Question"> | string | null
    experience?: IntWithAggregatesFilter<"Question"> | number
    correctAnswer?: StringNullableListFilter<"Question">
    partialAllowed?: BoolWithAggregatesFilter<"Question"> | boolean
    partialThreshold?: IntNullableWithAggregatesFilter<"Question"> | number | null
    explanation?: StringNullableWithAggregatesFilter<"Question"> | string | null
    hasCorrectAnswer?: BoolWithAggregatesFilter<"Question"> | boolean
    audioPath?: StringNullableWithAggregatesFilter<"Question"> | string | null
    imagePath?: StringNullableWithAggregatesFilter<"Question"> | string | null
    intro?: StringNullableWithAggregatesFilter<"Question"> | string | null
    speakers?: JsonNullableWithAggregatesFilter<"Question">
    statements?: JsonNullableWithAggregatesFilter<"Question">
    tableSpec?: JsonNullableWithAggregatesFilter<"Question">
    images?: StringNullableListFilter<"Question">
    explanationImages?: StringNullableListFilter<"Question">
    globalImages?: StringNullableListFilter<"Question">
    subQuestions?: JsonNullableWithAggregatesFilter<"Question">
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    slug?: StringFilter<"Subject"> | string
    tasksCount?: IntFilter<"Subject"> | number
    questionsCount?: IntFilter<"Subject"> | number
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    questions?: QuestionListRelationFilter
    users?: UserListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tasksCount?: SortOrder
    questionsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    tasksCount?: IntFilter<"Subject"> | number
    questionsCount?: IntFilter<"Subject"> | number
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    questions?: QuestionListRelationFilter
    users?: UserListRelationFilter
    tasks?: TaskListRelationFilter
  }, "id" | "name" | "slug">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tasksCount?: SortOrder
    questionsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subject"> | string
    name?: StringWithAggregatesFilter<"Subject"> | string
    slug?: StringWithAggregatesFilter<"Subject"> | string
    tasksCount?: IntWithAggregatesFilter<"Subject"> | number
    questionsCount?: IntWithAggregatesFilter<"Subject"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
  }

  export type UserAnswerWhereInput = {
    AND?: UserAnswerWhereInput | UserAnswerWhereInput[]
    OR?: UserAnswerWhereInput[]
    NOT?: UserAnswerWhereInput | UserAnswerWhereInput[]
    id?: StringFilter<"UserAnswer"> | string
    userId?: StringFilter<"UserAnswer"> | string
    questionId?: StringFilter<"UserAnswer"> | string
    answer?: StringFilter<"UserAnswer"> | string
    isCorrect?: EnumIsCorrectTypeFilter<"UserAnswer"> | $Enums.IsCorrectType
    subjectSlug?: StringFilter<"UserAnswer"> | string
    createdAt?: DateTimeFilter<"UserAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"UserAnswer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type UserAnswerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    subjectSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type UserAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAnswerWhereInput | UserAnswerWhereInput[]
    OR?: UserAnswerWhereInput[]
    NOT?: UserAnswerWhereInput | UserAnswerWhereInput[]
    userId?: StringFilter<"UserAnswer"> | string
    questionId?: StringFilter<"UserAnswer"> | string
    answer?: StringFilter<"UserAnswer"> | string
    isCorrect?: EnumIsCorrectTypeFilter<"UserAnswer"> | $Enums.IsCorrectType
    subjectSlug?: StringFilter<"UserAnswer"> | string
    createdAt?: DateTimeFilter<"UserAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"UserAnswer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type UserAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    subjectSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserAnswerCountOrderByAggregateInput
    _max?: UserAnswerMaxOrderByAggregateInput
    _min?: UserAnswerMinOrderByAggregateInput
  }

  export type UserAnswerScalarWhereWithAggregatesInput = {
    AND?: UserAnswerScalarWhereWithAggregatesInput | UserAnswerScalarWhereWithAggregatesInput[]
    OR?: UserAnswerScalarWhereWithAggregatesInput[]
    NOT?: UserAnswerScalarWhereWithAggregatesInput | UserAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAnswer"> | string
    userId?: StringWithAggregatesFilter<"UserAnswer"> | string
    questionId?: StringWithAggregatesFilter<"UserAnswer"> | string
    answer?: StringWithAggregatesFilter<"UserAnswer"> | string
    isCorrect?: EnumIsCorrectTypeWithAggregatesFilter<"UserAnswer"> | $Enums.IsCorrectType
    subjectSlug?: StringWithAggregatesFilter<"UserAnswer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserAnswer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserAnswer"> | Date | string
  }

  export type UserQuestionSeedWhereInput = {
    AND?: UserQuestionSeedWhereInput | UserQuestionSeedWhereInput[]
    OR?: UserQuestionSeedWhereInput[]
    NOT?: UserQuestionSeedWhereInput | UserQuestionSeedWhereInput[]
    id?: IntFilter<"UserQuestionSeed"> | number
    userId?: StringFilter<"UserQuestionSeed"> | string
    subjectId?: StringFilter<"UserQuestionSeed"> | string
    taskNumber?: IntFilter<"UserQuestionSeed"> | number
    order?: StringNullableListFilter<"UserQuestionSeed">
    createdAt?: DateTimeFilter<"UserQuestionSeed"> | Date | string
  }

  export type UserQuestionSeedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    taskNumber?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type UserQuestionSeedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_taskNumber_subjectId?: UserQuestionSeedUserIdTaskNumberSubjectIdCompoundUniqueInput
    AND?: UserQuestionSeedWhereInput | UserQuestionSeedWhereInput[]
    OR?: UserQuestionSeedWhereInput[]
    NOT?: UserQuestionSeedWhereInput | UserQuestionSeedWhereInput[]
    userId?: StringFilter<"UserQuestionSeed"> | string
    subjectId?: StringFilter<"UserQuestionSeed"> | string
    taskNumber?: IntFilter<"UserQuestionSeed"> | number
    order?: StringNullableListFilter<"UserQuestionSeed">
    createdAt?: DateTimeFilter<"UserQuestionSeed"> | Date | string
  }, "id" | "userId_taskNumber_subjectId">

  export type UserQuestionSeedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    taskNumber?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: UserQuestionSeedCountOrderByAggregateInput
    _avg?: UserQuestionSeedAvgOrderByAggregateInput
    _max?: UserQuestionSeedMaxOrderByAggregateInput
    _min?: UserQuestionSeedMinOrderByAggregateInput
    _sum?: UserQuestionSeedSumOrderByAggregateInput
  }

  export type UserQuestionSeedScalarWhereWithAggregatesInput = {
    AND?: UserQuestionSeedScalarWhereWithAggregatesInput | UserQuestionSeedScalarWhereWithAggregatesInput[]
    OR?: UserQuestionSeedScalarWhereWithAggregatesInput[]
    NOT?: UserQuestionSeedScalarWhereWithAggregatesInput | UserQuestionSeedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserQuestionSeed"> | number
    userId?: StringWithAggregatesFilter<"UserQuestionSeed"> | string
    subjectId?: StringWithAggregatesFilter<"UserQuestionSeed"> | string
    taskNumber?: IntWithAggregatesFilter<"UserQuestionSeed"> | number
    order?: StringNullableListFilter<"UserQuestionSeed">
    createdAt?: DateTimeWithAggregatesFilter<"UserQuestionSeed"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    taskNumber?: IntFilter<"Task"> | number
    subjectId?: StringFilter<"Task"> | string
    questionsCount?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    questions?: QuestionListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    taskNumber?: SortOrder
    subjectId?: SortOrder
    questionsCount?: SortOrder
    createdAt?: SortOrder
    subject?: SubjectOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    taskNumber?: IntFilter<"Task"> | number
    subjectId?: StringFilter<"Task"> | string
    questionsCount?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    questions?: QuestionListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    taskNumber?: SortOrder
    subjectId?: SortOrder
    questionsCount?: SortOrder
    createdAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    taskNumber?: IntWithAggregatesFilter<"Task"> | number
    subjectId?: StringWithAggregatesFilter<"Task"> | string
    questionsCount?: IntWithAggregatesFilter<"Task"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type UserVariantWhereInput = {
    AND?: UserVariantWhereInput | UserVariantWhereInput[]
    OR?: UserVariantWhereInput[]
    NOT?: UserVariantWhereInput | UserVariantWhereInput[]
    id?: IntFilter<"UserVariant"> | number
    userId?: StringFilter<"UserVariant"> | string
    createdAt?: DateTimeFilter<"UserVariant"> | Date | string
    updatedAt?: DateTimeFilter<"UserVariant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    questions?: UserVariantQuestionListRelationFilter
  }

  export type UserVariantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    questions?: UserVariantQuestionOrderByRelationAggregateInput
  }

  export type UserVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserVariantWhereInput | UserVariantWhereInput[]
    OR?: UserVariantWhereInput[]
    NOT?: UserVariantWhereInput | UserVariantWhereInput[]
    userId?: StringFilter<"UserVariant"> | string
    createdAt?: DateTimeFilter<"UserVariant"> | Date | string
    updatedAt?: DateTimeFilter<"UserVariant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    questions?: UserVariantQuestionListRelationFilter
  }, "id">

  export type UserVariantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserVariantCountOrderByAggregateInput
    _avg?: UserVariantAvgOrderByAggregateInput
    _max?: UserVariantMaxOrderByAggregateInput
    _min?: UserVariantMinOrderByAggregateInput
    _sum?: UserVariantSumOrderByAggregateInput
  }

  export type UserVariantScalarWhereWithAggregatesInput = {
    AND?: UserVariantScalarWhereWithAggregatesInput | UserVariantScalarWhereWithAggregatesInput[]
    OR?: UserVariantScalarWhereWithAggregatesInput[]
    NOT?: UserVariantScalarWhereWithAggregatesInput | UserVariantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserVariant"> | number
    userId?: StringWithAggregatesFilter<"UserVariant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserVariant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserVariant"> | Date | string
  }

  export type UserVariantQuestionWhereInput = {
    AND?: UserVariantQuestionWhereInput | UserVariantQuestionWhereInput[]
    OR?: UserVariantQuestionWhereInput[]
    NOT?: UserVariantQuestionWhereInput | UserVariantQuestionWhereInput[]
    id?: StringFilter<"UserVariantQuestion"> | string
    variantId?: IntFilter<"UserVariantQuestion"> | number
    questionId?: StringFilter<"UserVariantQuestion"> | string
    order?: IntNullableFilter<"UserVariantQuestion"> | number | null
    createdAt?: DateTimeFilter<"UserVariantQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"UserVariantQuestion"> | Date | string
    variant?: XOR<UserVariantScalarRelationFilter, UserVariantWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type UserVariantQuestionOrderByWithRelationInput = {
    id?: SortOrder
    variantId?: SortOrder
    questionId?: SortOrder
    order?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    variant?: UserVariantOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type UserVariantQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    variantId_questionId?: UserVariantQuestionVariantIdQuestionIdCompoundUniqueInput
    AND?: UserVariantQuestionWhereInput | UserVariantQuestionWhereInput[]
    OR?: UserVariantQuestionWhereInput[]
    NOT?: UserVariantQuestionWhereInput | UserVariantQuestionWhereInput[]
    variantId?: IntFilter<"UserVariantQuestion"> | number
    questionId?: StringFilter<"UserVariantQuestion"> | string
    order?: IntNullableFilter<"UserVariantQuestion"> | number | null
    createdAt?: DateTimeFilter<"UserVariantQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"UserVariantQuestion"> | Date | string
    variant?: XOR<UserVariantScalarRelationFilter, UserVariantWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "variantId_questionId">

  export type UserVariantQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    variantId?: SortOrder
    questionId?: SortOrder
    order?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserVariantQuestionCountOrderByAggregateInput
    _avg?: UserVariantQuestionAvgOrderByAggregateInput
    _max?: UserVariantQuestionMaxOrderByAggregateInput
    _min?: UserVariantQuestionMinOrderByAggregateInput
    _sum?: UserVariantQuestionSumOrderByAggregateInput
  }

  export type UserVariantQuestionScalarWhereWithAggregatesInput = {
    AND?: UserVariantQuestionScalarWhereWithAggregatesInput | UserVariantQuestionScalarWhereWithAggregatesInput[]
    OR?: UserVariantQuestionScalarWhereWithAggregatesInput[]
    NOT?: UserVariantQuestionScalarWhereWithAggregatesInput | UserVariantQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserVariantQuestion"> | string
    variantId?: IntWithAggregatesFilter<"UserVariantQuestion"> | number
    questionId?: StringWithAggregatesFilter<"UserVariantQuestion"> | string
    order?: IntNullableWithAggregatesFilter<"UserVariantQuestion"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"UserVariantQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserVariantQuestion"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
    used?: BoolFilter<"Token"> | boolean
    expiresAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    tokenValue?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    used?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    tokenValue?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    userId?: StringFilter<"Token"> | string
    used?: BoolFilter<"Token"> | boolean
    expiresAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    tokenValue?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    used?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    tokenValue?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    userId?: StringWithAggregatesFilter<"Token"> | string
    used?: BoolWithAggregatesFilter<"Token"> | boolean
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    tokenValue?: StringWithAggregatesFilter<"Token"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"Token"> | $Enums.TokenType
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    experience?: number
    rating?: $Enums.UserRating
    isDeactivated?: boolean
    avatar?: string | null
    telegramId?: string | null
    isTwoFactor?: boolean
    totpSecret?: string | null
    tempTotpSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteSubjects?: SubjectCreateNestedManyWithoutUsersInput
    variant?: UserVariantCreateNestedManyWithoutUserInput
    answers?: UserAnswerCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    experience?: number
    rating?: $Enums.UserRating
    isDeactivated?: boolean
    avatar?: string | null
    telegramId?: string | null
    isTwoFactor?: boolean
    totpSecret?: string | null
    tempTotpSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteSubjects?: SubjectUncheckedCreateNestedManyWithoutUsersInput
    variant?: UserVariantUncheckedCreateNestedManyWithoutUserInput
    answers?: UserAnswerUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    rating?: EnumUserRatingFieldUpdateOperationsInput | $Enums.UserRating
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactor?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tempTotpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteSubjects?: SubjectUpdateManyWithoutUsersNestedInput
    variant?: UserVariantUpdateManyWithoutUserNestedInput
    answers?: UserAnswerUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    rating?: EnumUserRatingFieldUpdateOperationsInput | $Enums.UserRating
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactor?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tempTotpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteSubjects?: SubjectUncheckedUpdateManyWithoutUsersNestedInput
    variant?: UserVariantUncheckedUpdateManyWithoutUserNestedInput
    answers?: UserAnswerUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    experience?: number
    rating?: $Enums.UserRating
    isDeactivated?: boolean
    avatar?: string | null
    telegramId?: string | null
    isTwoFactor?: boolean
    totpSecret?: string | null
    tempTotpSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    rating?: EnumUserRatingFieldUpdateOperationsInput | $Enums.UserRating
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactor?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tempTotpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    rating?: EnumUserRatingFieldUpdateOperationsInput | $Enums.UserRating
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactor?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tempTotpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    type?: string
    text?: string | null
    question?: string | null
    experience: number
    correctAnswer?: QuestionCreatecorrectAnswerInput | string[]
    partialAllowed?: boolean
    partialThreshold?: number | null
    explanation?: string | null
    hasCorrectAnswer?: boolean
    audioPath?: string | null
    imagePath?: string | null
    intro?: string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionCreateimagesInput | string[]
    explanationImages?: QuestionCreateexplanationImagesInput | string[]
    globalImages?: QuestionCreateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutQuestionsInput
    subject: SubjectCreateNestedOneWithoutQuestionsInput
    answers?: UserAnswerCreateNestedManyWithoutQuestionInput
    selectedInVariants?: UserVariantQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    subjectId: string
    taskId: string
    type?: string
    text?: string | null
    question?: string | null
    experience: number
    correctAnswer?: QuestionCreatecorrectAnswerInput | string[]
    partialAllowed?: boolean
    partialThreshold?: number | null
    explanation?: string | null
    hasCorrectAnswer?: boolean
    audioPath?: string | null
    imagePath?: string | null
    intro?: string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionCreateimagesInput | string[]
    explanationImages?: QuestionCreateexplanationImagesInput | string[]
    globalImages?: QuestionCreateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: UserAnswerUncheckedCreateNestedManyWithoutQuestionInput
    selectedInVariants?: UserVariantQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    correctAnswer?: QuestionUpdatecorrectAnswerInput | string[]
    partialAllowed?: BoolFieldUpdateOperationsInput | boolean
    partialThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    hasCorrectAnswer?: BoolFieldUpdateOperationsInput | boolean
    audioPath?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionUpdateimagesInput | string[]
    explanationImages?: QuestionUpdateexplanationImagesInput | string[]
    globalImages?: QuestionUpdateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutQuestionsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: UserAnswerUpdateManyWithoutQuestionNestedInput
    selectedInVariants?: UserVariantQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    correctAnswer?: QuestionUpdatecorrectAnswerInput | string[]
    partialAllowed?: BoolFieldUpdateOperationsInput | boolean
    partialThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    hasCorrectAnswer?: BoolFieldUpdateOperationsInput | boolean
    audioPath?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionUpdateimagesInput | string[]
    explanationImages?: QuestionUpdateexplanationImagesInput | string[]
    globalImages?: QuestionUpdateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: UserAnswerUncheckedUpdateManyWithoutQuestionNestedInput
    selectedInVariants?: UserVariantQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    subjectId: string
    taskId: string
    type?: string
    text?: string | null
    question?: string | null
    experience: number
    correctAnswer?: QuestionCreatecorrectAnswerInput | string[]
    partialAllowed?: boolean
    partialThreshold?: number | null
    explanation?: string | null
    hasCorrectAnswer?: boolean
    audioPath?: string | null
    imagePath?: string | null
    intro?: string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionCreateimagesInput | string[]
    explanationImages?: QuestionCreateexplanationImagesInput | string[]
    globalImages?: QuestionCreateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    correctAnswer?: QuestionUpdatecorrectAnswerInput | string[]
    partialAllowed?: BoolFieldUpdateOperationsInput | boolean
    partialThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    hasCorrectAnswer?: BoolFieldUpdateOperationsInput | boolean
    audioPath?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionUpdateimagesInput | string[]
    explanationImages?: QuestionUpdateexplanationImagesInput | string[]
    globalImages?: QuestionUpdateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    correctAnswer?: QuestionUpdatecorrectAnswerInput | string[]
    partialAllowed?: BoolFieldUpdateOperationsInput | boolean
    partialThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    hasCorrectAnswer?: BoolFieldUpdateOperationsInput | boolean
    audioPath?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionUpdateimagesInput | string[]
    explanationImages?: QuestionUpdateexplanationImagesInput | string[]
    globalImages?: QuestionUpdateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateInput = {
    id?: string
    name: string
    slug: string
    tasksCount?: number
    questionsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutSubjectInput
    users?: UserCreateNestedManyWithoutFavoriteSubjectsInput
    tasks?: TaskCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    tasksCount?: number
    questionsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutSubjectInput
    users?: UserUncheckedCreateNestedManyWithoutFavoriteSubjectsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tasksCount?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutSubjectNestedInput
    users?: UserUpdateManyWithoutFavoriteSubjectsNestedInput
    tasks?: TaskUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tasksCount?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutSubjectNestedInput
    users?: UserUncheckedUpdateManyWithoutFavoriteSubjectsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: string
    name: string
    slug: string
    tasksCount?: number
    questionsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tasksCount?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tasksCount?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswerCreateInput = {
    id?: string
    answer: string
    isCorrect: $Enums.IsCorrectType
    subjectSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type UserAnswerUncheckedCreateInput = {
    id?: string
    userId: string
    questionId: string
    answer: string
    isCorrect: $Enums.IsCorrectType
    subjectSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: EnumIsCorrectTypeFieldUpdateOperationsInput | $Enums.IsCorrectType
    subjectSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type UserAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: EnumIsCorrectTypeFieldUpdateOperationsInput | $Enums.IsCorrectType
    subjectSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswerCreateManyInput = {
    id?: string
    userId: string
    questionId: string
    answer: string
    isCorrect: $Enums.IsCorrectType
    subjectSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: EnumIsCorrectTypeFieldUpdateOperationsInput | $Enums.IsCorrectType
    subjectSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: EnumIsCorrectTypeFieldUpdateOperationsInput | $Enums.IsCorrectType
    subjectSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionSeedCreateInput = {
    userId: string
    subjectId: string
    taskNumber: number
    order?: UserQuestionSeedCreateorderInput | string[]
    createdAt?: Date | string
  }

  export type UserQuestionSeedUncheckedCreateInput = {
    id?: number
    userId: string
    subjectId: string
    taskNumber: number
    order?: UserQuestionSeedCreateorderInput | string[]
    createdAt?: Date | string
  }

  export type UserQuestionSeedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    taskNumber?: IntFieldUpdateOperationsInput | number
    order?: UserQuestionSeedUpdateorderInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionSeedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    taskNumber?: IntFieldUpdateOperationsInput | number
    order?: UserQuestionSeedUpdateorderInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionSeedCreateManyInput = {
    id?: number
    userId: string
    subjectId: string
    taskNumber: number
    order?: UserQuestionSeedCreateorderInput | string[]
    createdAt?: Date | string
  }

  export type UserQuestionSeedUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    taskNumber?: IntFieldUpdateOperationsInput | number
    order?: UserQuestionSeedUpdateorderInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionSeedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    taskNumber?: IntFieldUpdateOperationsInput | number
    order?: UserQuestionSeedUpdateorderInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    taskNumber: number
    questionsCount?: number
    createdAt?: Date | string
    subject: SubjectCreateNestedOneWithoutTasksInput
    questions?: QuestionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    taskNumber: number
    subjectId: string
    questionsCount?: number
    createdAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskNumber?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutTasksNestedInput
    questions?: QuestionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskNumber?: IntFieldUpdateOperationsInput | number
    subjectId?: StringFieldUpdateOperationsInput | string
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    taskNumber: number
    subjectId: string
    questionsCount?: number
    createdAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskNumber?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskNumber?: IntFieldUpdateOperationsInput | number
    subjectId?: StringFieldUpdateOperationsInput | string
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVariantCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVariantInput
    questions?: UserVariantQuestionCreateNestedManyWithoutVariantInput
  }

  export type UserVariantUncheckedCreateInput = {
    id?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: UserVariantQuestionUncheckedCreateNestedManyWithoutVariantInput
  }

  export type UserVariantUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVariantNestedInput
    questions?: UserVariantQuestionUpdateManyWithoutVariantNestedInput
  }

  export type UserVariantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: UserVariantQuestionUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type UserVariantCreateManyInput = {
    id?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVariantUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVariantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVariantQuestionCreateInput = {
    id?: string
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variant: UserVariantCreateNestedOneWithoutQuestionsInput
    question: QuestionCreateNestedOneWithoutSelectedInVariantsInput
  }

  export type UserVariantQuestionUncheckedCreateInput = {
    id?: string
    variantId: number
    questionId: string
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVariantQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: UserVariantUpdateOneRequiredWithoutQuestionsNestedInput
    question?: QuestionUpdateOneRequiredWithoutSelectedInVariantsNestedInput
  }

  export type UserVariantQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: IntFieldUpdateOperationsInput | number
    questionId?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVariantQuestionCreateManyInput = {
    id?: string
    variantId: number
    questionId: string
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVariantQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVariantQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: IntFieldUpdateOperationsInput | number
    questionId?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    used?: boolean
    expiresAt?: Date | string | null
    tokenValue: string
    type: $Enums.TokenType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    userId: string
    used?: boolean
    expiresAt?: Date | string | null
    tokenValue: string
    type: $Enums.TokenType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenValue?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenValue?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    id?: string
    userId: string
    used?: boolean
    expiresAt?: Date | string | null
    tokenValue: string
    type: $Enums.TokenType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenValue?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenValue?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumUserRatingFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRating | EnumUserRatingFieldRefInput<$PrismaModel>
    in?: $Enums.UserRating[] | ListEnumUserRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRating[] | ListEnumUserRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRatingFilter<$PrismaModel> | $Enums.UserRating
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type UserVariantListRelationFilter = {
    every?: UserVariantWhereInput
    some?: UserVariantWhereInput
    none?: UserVariantWhereInput
  }

  export type UserAnswerListRelationFilter = {
    every?: UserAnswerWhereInput
    some?: UserAnswerWhereInput
    none?: UserAnswerWhereInput
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    experience?: SortOrder
    rating?: SortOrder
    isDeactivated?: SortOrder
    avatar?: SortOrder
    telegramId?: SortOrder
    isTwoFactor?: SortOrder
    totpSecret?: SortOrder
    tempTotpSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    experience?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    experience?: SortOrder
    rating?: SortOrder
    isDeactivated?: SortOrder
    avatar?: SortOrder
    telegramId?: SortOrder
    isTwoFactor?: SortOrder
    totpSecret?: SortOrder
    tempTotpSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    experience?: SortOrder
    rating?: SortOrder
    isDeactivated?: SortOrder
    avatar?: SortOrder
    telegramId?: SortOrder
    isTwoFactor?: SortOrder
    totpSecret?: SortOrder
    tempTotpSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    experience?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumUserRatingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRating | EnumUserRatingFieldRefInput<$PrismaModel>
    in?: $Enums.UserRating[] | ListEnumUserRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRating[] | ListEnumUserRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRatingWithAggregatesFilter<$PrismaModel> | $Enums.UserRating
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRatingFilter<$PrismaModel>
    _max?: NestedEnumUserRatingFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type UserVariantQuestionListRelationFilter = {
    every?: UserVariantQuestionWhereInput
    some?: UserVariantQuestionWhereInput
    none?: UserVariantQuestionWhereInput
  }

  export type UserVariantQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    taskId?: SortOrder
    type?: SortOrder
    text?: SortOrder
    question?: SortOrder
    experience?: SortOrder
    correctAnswer?: SortOrder
    partialAllowed?: SortOrder
    partialThreshold?: SortOrder
    explanation?: SortOrder
    hasCorrectAnswer?: SortOrder
    audioPath?: SortOrder
    imagePath?: SortOrder
    intro?: SortOrder
    speakers?: SortOrder
    statements?: SortOrder
    tableSpec?: SortOrder
    images?: SortOrder
    explanationImages?: SortOrder
    globalImages?: SortOrder
    subQuestions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    experience?: SortOrder
    partialThreshold?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    taskId?: SortOrder
    type?: SortOrder
    text?: SortOrder
    question?: SortOrder
    experience?: SortOrder
    partialAllowed?: SortOrder
    partialThreshold?: SortOrder
    explanation?: SortOrder
    hasCorrectAnswer?: SortOrder
    audioPath?: SortOrder
    imagePath?: SortOrder
    intro?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    taskId?: SortOrder
    type?: SortOrder
    text?: SortOrder
    question?: SortOrder
    experience?: SortOrder
    partialAllowed?: SortOrder
    partialThreshold?: SortOrder
    explanation?: SortOrder
    hasCorrectAnswer?: SortOrder
    audioPath?: SortOrder
    imagePath?: SortOrder
    intro?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    experience?: SortOrder
    partialThreshold?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tasksCount?: SortOrder
    questionsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    tasksCount?: SortOrder
    questionsCount?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tasksCount?: SortOrder
    questionsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tasksCount?: SortOrder
    questionsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    tasksCount?: SortOrder
    questionsCount?: SortOrder
  }

  export type EnumIsCorrectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IsCorrectType | EnumIsCorrectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IsCorrectType[] | ListEnumIsCorrectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IsCorrectType[] | ListEnumIsCorrectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIsCorrectTypeFilter<$PrismaModel> | $Enums.IsCorrectType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type UserAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    subjectSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    subjectSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    subjectSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumIsCorrectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IsCorrectType | EnumIsCorrectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IsCorrectType[] | ListEnumIsCorrectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IsCorrectType[] | ListEnumIsCorrectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIsCorrectTypeWithAggregatesFilter<$PrismaModel> | $Enums.IsCorrectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIsCorrectTypeFilter<$PrismaModel>
    _max?: NestedEnumIsCorrectTypeFilter<$PrismaModel>
  }

  export type UserQuestionSeedUserIdTaskNumberSubjectIdCompoundUniqueInput = {
    userId: string
    taskNumber: number
    subjectId: string
  }

  export type UserQuestionSeedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    taskNumber?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type UserQuestionSeedAvgOrderByAggregateInput = {
    id?: SortOrder
    taskNumber?: SortOrder
  }

  export type UserQuestionSeedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    taskNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type UserQuestionSeedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    taskNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type UserQuestionSeedSumOrderByAggregateInput = {
    id?: SortOrder
    taskNumber?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    taskNumber?: SortOrder
    subjectId?: SortOrder
    questionsCount?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    taskNumber?: SortOrder
    questionsCount?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    taskNumber?: SortOrder
    subjectId?: SortOrder
    questionsCount?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    taskNumber?: SortOrder
    subjectId?: SortOrder
    questionsCount?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    taskNumber?: SortOrder
    questionsCount?: SortOrder
  }

  export type UserVariantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVariantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVariantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVariantSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserVariantScalarRelationFilter = {
    is?: UserVariantWhereInput
    isNot?: UserVariantWhereInput
  }

  export type UserVariantQuestionVariantIdQuestionIdCompoundUniqueInput = {
    variantId: number
    questionId: string
  }

  export type UserVariantQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVariantQuestionAvgOrderByAggregateInput = {
    variantId?: SortOrder
    order?: SortOrder
  }

  export type UserVariantQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVariantQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVariantQuestionSumOrderByAggregateInput = {
    variantId?: SortOrder
    order?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    used?: SortOrder
    expiresAt?: SortOrder
    tokenValue?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    used?: SortOrder
    expiresAt?: SortOrder
    tokenValue?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    used?: SortOrder
    expiresAt?: SortOrder
    tokenValue?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type SubjectCreateNestedManyWithoutUsersInput = {
    create?: XOR<SubjectCreateWithoutUsersInput, SubjectUncheckedCreateWithoutUsersInput> | SubjectCreateWithoutUsersInput[] | SubjectUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutUsersInput | SubjectCreateOrConnectWithoutUsersInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type UserVariantCreateNestedManyWithoutUserInput = {
    create?: XOR<UserVariantCreateWithoutUserInput, UserVariantUncheckedCreateWithoutUserInput> | UserVariantCreateWithoutUserInput[] | UserVariantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVariantCreateOrConnectWithoutUserInput | UserVariantCreateOrConnectWithoutUserInput[]
    createMany?: UserVariantCreateManyUserInputEnvelope
    connect?: UserVariantWhereUniqueInput | UserVariantWhereUniqueInput[]
  }

  export type UserAnswerCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAnswerCreateWithoutUserInput, UserAnswerUncheckedCreateWithoutUserInput> | UserAnswerCreateWithoutUserInput[] | UserAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutUserInput | UserAnswerCreateOrConnectWithoutUserInput[]
    createMany?: UserAnswerCreateManyUserInputEnvelope
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<SubjectCreateWithoutUsersInput, SubjectUncheckedCreateWithoutUsersInput> | SubjectCreateWithoutUsersInput[] | SubjectUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutUsersInput | SubjectCreateOrConnectWithoutUsersInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type UserVariantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserVariantCreateWithoutUserInput, UserVariantUncheckedCreateWithoutUserInput> | UserVariantCreateWithoutUserInput[] | UserVariantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVariantCreateOrConnectWithoutUserInput | UserVariantCreateOrConnectWithoutUserInput[]
    createMany?: UserVariantCreateManyUserInputEnvelope
    connect?: UserVariantWhereUniqueInput | UserVariantWhereUniqueInput[]
  }

  export type UserAnswerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAnswerCreateWithoutUserInput, UserAnswerUncheckedCreateWithoutUserInput> | UserAnswerCreateWithoutUserInput[] | UserAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutUserInput | UserAnswerCreateOrConnectWithoutUserInput[]
    createMany?: UserAnswerCreateManyUserInputEnvelope
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUserRatingFieldUpdateOperationsInput = {
    set?: $Enums.UserRating
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubjectUpdateManyWithoutUsersNestedInput = {
    create?: XOR<SubjectCreateWithoutUsersInput, SubjectUncheckedCreateWithoutUsersInput> | SubjectCreateWithoutUsersInput[] | SubjectUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutUsersInput | SubjectCreateOrConnectWithoutUsersInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutUsersInput | SubjectUpsertWithWhereUniqueWithoutUsersInput[]
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutUsersInput | SubjectUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutUsersInput | SubjectUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type UserVariantUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserVariantCreateWithoutUserInput, UserVariantUncheckedCreateWithoutUserInput> | UserVariantCreateWithoutUserInput[] | UserVariantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVariantCreateOrConnectWithoutUserInput | UserVariantCreateOrConnectWithoutUserInput[]
    upsert?: UserVariantUpsertWithWhereUniqueWithoutUserInput | UserVariantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserVariantCreateManyUserInputEnvelope
    set?: UserVariantWhereUniqueInput | UserVariantWhereUniqueInput[]
    disconnect?: UserVariantWhereUniqueInput | UserVariantWhereUniqueInput[]
    delete?: UserVariantWhereUniqueInput | UserVariantWhereUniqueInput[]
    connect?: UserVariantWhereUniqueInput | UserVariantWhereUniqueInput[]
    update?: UserVariantUpdateWithWhereUniqueWithoutUserInput | UserVariantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserVariantUpdateManyWithWhereWithoutUserInput | UserVariantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserVariantScalarWhereInput | UserVariantScalarWhereInput[]
  }

  export type UserAnswerUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAnswerCreateWithoutUserInput, UserAnswerUncheckedCreateWithoutUserInput> | UserAnswerCreateWithoutUserInput[] | UserAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutUserInput | UserAnswerCreateOrConnectWithoutUserInput[]
    upsert?: UserAnswerUpsertWithWhereUniqueWithoutUserInput | UserAnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAnswerCreateManyUserInputEnvelope
    set?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    disconnect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    delete?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    update?: UserAnswerUpdateWithWhereUniqueWithoutUserInput | UserAnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAnswerUpdateManyWithWhereWithoutUserInput | UserAnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAnswerScalarWhereInput | UserAnswerScalarWhereInput[]
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<SubjectCreateWithoutUsersInput, SubjectUncheckedCreateWithoutUsersInput> | SubjectCreateWithoutUsersInput[] | SubjectUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutUsersInput | SubjectCreateOrConnectWithoutUsersInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutUsersInput | SubjectUpsertWithWhereUniqueWithoutUsersInput[]
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutUsersInput | SubjectUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutUsersInput | SubjectUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type UserVariantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserVariantCreateWithoutUserInput, UserVariantUncheckedCreateWithoutUserInput> | UserVariantCreateWithoutUserInput[] | UserVariantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVariantCreateOrConnectWithoutUserInput | UserVariantCreateOrConnectWithoutUserInput[]
    upsert?: UserVariantUpsertWithWhereUniqueWithoutUserInput | UserVariantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserVariantCreateManyUserInputEnvelope
    set?: UserVariantWhereUniqueInput | UserVariantWhereUniqueInput[]
    disconnect?: UserVariantWhereUniqueInput | UserVariantWhereUniqueInput[]
    delete?: UserVariantWhereUniqueInput | UserVariantWhereUniqueInput[]
    connect?: UserVariantWhereUniqueInput | UserVariantWhereUniqueInput[]
    update?: UserVariantUpdateWithWhereUniqueWithoutUserInput | UserVariantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserVariantUpdateManyWithWhereWithoutUserInput | UserVariantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserVariantScalarWhereInput | UserVariantScalarWhereInput[]
  }

  export type UserAnswerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAnswerCreateWithoutUserInput, UserAnswerUncheckedCreateWithoutUserInput> | UserAnswerCreateWithoutUserInput[] | UserAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutUserInput | UserAnswerCreateOrConnectWithoutUserInput[]
    upsert?: UserAnswerUpsertWithWhereUniqueWithoutUserInput | UserAnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAnswerCreateManyUserInputEnvelope
    set?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    disconnect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    delete?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    update?: UserAnswerUpdateWithWhereUniqueWithoutUserInput | UserAnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAnswerUpdateManyWithWhereWithoutUserInput | UserAnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAnswerScalarWhereInput | UserAnswerScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type QuestionCreatecorrectAnswerInput = {
    set: string[]
  }

  export type QuestionCreateimagesInput = {
    set: string[]
  }

  export type QuestionCreateexplanationImagesInput = {
    set: string[]
  }

  export type QuestionCreateglobalImagesInput = {
    set: string[]
  }

  export type TaskCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<TaskCreateWithoutQuestionsInput, TaskUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutQuestionsInput
    connect?: TaskWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<SubjectCreateWithoutQuestionsInput, SubjectUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutQuestionsInput
    connect?: SubjectWhereUniqueInput
  }

  export type UserAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserAnswerCreateWithoutQuestionInput, UserAnswerUncheckedCreateWithoutQuestionInput> | UserAnswerCreateWithoutQuestionInput[] | UserAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutQuestionInput | UserAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: UserAnswerCreateManyQuestionInputEnvelope
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
  }

  export type UserVariantQuestionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserVariantQuestionCreateWithoutQuestionInput, UserVariantQuestionUncheckedCreateWithoutQuestionInput> | UserVariantQuestionCreateWithoutQuestionInput[] | UserVariantQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserVariantQuestionCreateOrConnectWithoutQuestionInput | UserVariantQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: UserVariantQuestionCreateManyQuestionInputEnvelope
    connect?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
  }

  export type UserAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserAnswerCreateWithoutQuestionInput, UserAnswerUncheckedCreateWithoutQuestionInput> | UserAnswerCreateWithoutQuestionInput[] | UserAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutQuestionInput | UserAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: UserAnswerCreateManyQuestionInputEnvelope
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
  }

  export type UserVariantQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserVariantQuestionCreateWithoutQuestionInput, UserVariantQuestionUncheckedCreateWithoutQuestionInput> | UserVariantQuestionCreateWithoutQuestionInput[] | UserVariantQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserVariantQuestionCreateOrConnectWithoutQuestionInput | UserVariantQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: UserVariantQuestionCreateManyQuestionInputEnvelope
    connect?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
  }

  export type QuestionUpdatecorrectAnswerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type QuestionUpdateexplanationImagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type QuestionUpdateglobalImagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TaskUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<TaskCreateWithoutQuestionsInput, TaskUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutQuestionsInput
    upsert?: TaskUpsertWithoutQuestionsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutQuestionsInput, TaskUpdateWithoutQuestionsInput>, TaskUncheckedUpdateWithoutQuestionsInput>
  }

  export type SubjectUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<SubjectCreateWithoutQuestionsInput, SubjectUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutQuestionsInput
    upsert?: SubjectUpsertWithoutQuestionsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutQuestionsInput, SubjectUpdateWithoutQuestionsInput>, SubjectUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserAnswerCreateWithoutQuestionInput, UserAnswerUncheckedCreateWithoutQuestionInput> | UserAnswerCreateWithoutQuestionInput[] | UserAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutQuestionInput | UserAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: UserAnswerUpsertWithWhereUniqueWithoutQuestionInput | UserAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserAnswerCreateManyQuestionInputEnvelope
    set?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    disconnect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    delete?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    update?: UserAnswerUpdateWithWhereUniqueWithoutQuestionInput | UserAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserAnswerUpdateManyWithWhereWithoutQuestionInput | UserAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserAnswerScalarWhereInput | UserAnswerScalarWhereInput[]
  }

  export type UserVariantQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserVariantQuestionCreateWithoutQuestionInput, UserVariantQuestionUncheckedCreateWithoutQuestionInput> | UserVariantQuestionCreateWithoutQuestionInput[] | UserVariantQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserVariantQuestionCreateOrConnectWithoutQuestionInput | UserVariantQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: UserVariantQuestionUpsertWithWhereUniqueWithoutQuestionInput | UserVariantQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserVariantQuestionCreateManyQuestionInputEnvelope
    set?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    disconnect?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    delete?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    connect?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    update?: UserVariantQuestionUpdateWithWhereUniqueWithoutQuestionInput | UserVariantQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserVariantQuestionUpdateManyWithWhereWithoutQuestionInput | UserVariantQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserVariantQuestionScalarWhereInput | UserVariantQuestionScalarWhereInput[]
  }

  export type UserAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserAnswerCreateWithoutQuestionInput, UserAnswerUncheckedCreateWithoutQuestionInput> | UserAnswerCreateWithoutQuestionInput[] | UserAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutQuestionInput | UserAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: UserAnswerUpsertWithWhereUniqueWithoutQuestionInput | UserAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserAnswerCreateManyQuestionInputEnvelope
    set?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    disconnect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    delete?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    update?: UserAnswerUpdateWithWhereUniqueWithoutQuestionInput | UserAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserAnswerUpdateManyWithWhereWithoutQuestionInput | UserAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserAnswerScalarWhereInput | UserAnswerScalarWhereInput[]
  }

  export type UserVariantQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserVariantQuestionCreateWithoutQuestionInput, UserVariantQuestionUncheckedCreateWithoutQuestionInput> | UserVariantQuestionCreateWithoutQuestionInput[] | UserVariantQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserVariantQuestionCreateOrConnectWithoutQuestionInput | UserVariantQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: UserVariantQuestionUpsertWithWhereUniqueWithoutQuestionInput | UserVariantQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserVariantQuestionCreateManyQuestionInputEnvelope
    set?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    disconnect?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    delete?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    connect?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    update?: UserVariantQuestionUpdateWithWhereUniqueWithoutQuestionInput | UserVariantQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserVariantQuestionUpdateManyWithWhereWithoutQuestionInput | UserVariantQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserVariantQuestionScalarWhereInput | UserVariantQuestionScalarWhereInput[]
  }

  export type QuestionCreateNestedManyWithoutSubjectInput = {
    create?: XOR<QuestionCreateWithoutSubjectInput, QuestionUncheckedCreateWithoutSubjectInput> | QuestionCreateWithoutSubjectInput[] | QuestionUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutSubjectInput | QuestionCreateOrConnectWithoutSubjectInput[]
    createMany?: QuestionCreateManySubjectInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutFavoriteSubjectsInput = {
    create?: XOR<UserCreateWithoutFavoriteSubjectsInput, UserUncheckedCreateWithoutFavoriteSubjectsInput> | UserCreateWithoutFavoriteSubjectsInput[] | UserUncheckedCreateWithoutFavoriteSubjectsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteSubjectsInput | UserCreateOrConnectWithoutFavoriteSubjectsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TaskCreateWithoutSubjectInput, TaskUncheckedCreateWithoutSubjectInput> | TaskCreateWithoutSubjectInput[] | TaskUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSubjectInput | TaskCreateOrConnectWithoutSubjectInput[]
    createMany?: TaskCreateManySubjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<QuestionCreateWithoutSubjectInput, QuestionUncheckedCreateWithoutSubjectInput> | QuestionCreateWithoutSubjectInput[] | QuestionUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutSubjectInput | QuestionCreateOrConnectWithoutSubjectInput[]
    createMany?: QuestionCreateManySubjectInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFavoriteSubjectsInput = {
    create?: XOR<UserCreateWithoutFavoriteSubjectsInput, UserUncheckedCreateWithoutFavoriteSubjectsInput> | UserCreateWithoutFavoriteSubjectsInput[] | UserUncheckedCreateWithoutFavoriteSubjectsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteSubjectsInput | UserCreateOrConnectWithoutFavoriteSubjectsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TaskCreateWithoutSubjectInput, TaskUncheckedCreateWithoutSubjectInput> | TaskCreateWithoutSubjectInput[] | TaskUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSubjectInput | TaskCreateOrConnectWithoutSubjectInput[]
    createMany?: TaskCreateManySubjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type QuestionUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<QuestionCreateWithoutSubjectInput, QuestionUncheckedCreateWithoutSubjectInput> | QuestionCreateWithoutSubjectInput[] | QuestionUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutSubjectInput | QuestionCreateOrConnectWithoutSubjectInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutSubjectInput | QuestionUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: QuestionCreateManySubjectInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutSubjectInput | QuestionUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutSubjectInput | QuestionUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutFavoriteSubjectsNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteSubjectsInput, UserUncheckedCreateWithoutFavoriteSubjectsInput> | UserCreateWithoutFavoriteSubjectsInput[] | UserUncheckedCreateWithoutFavoriteSubjectsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteSubjectsInput | UserCreateOrConnectWithoutFavoriteSubjectsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavoriteSubjectsInput | UserUpsertWithWhereUniqueWithoutFavoriteSubjectsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavoriteSubjectsInput | UserUpdateWithWhereUniqueWithoutFavoriteSubjectsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavoriteSubjectsInput | UserUpdateManyWithWhereWithoutFavoriteSubjectsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TaskCreateWithoutSubjectInput, TaskUncheckedCreateWithoutSubjectInput> | TaskCreateWithoutSubjectInput[] | TaskUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSubjectInput | TaskCreateOrConnectWithoutSubjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSubjectInput | TaskUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TaskCreateManySubjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSubjectInput | TaskUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSubjectInput | TaskUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<QuestionCreateWithoutSubjectInput, QuestionUncheckedCreateWithoutSubjectInput> | QuestionCreateWithoutSubjectInput[] | QuestionUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutSubjectInput | QuestionCreateOrConnectWithoutSubjectInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutSubjectInput | QuestionUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: QuestionCreateManySubjectInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutSubjectInput | QuestionUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutSubjectInput | QuestionUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFavoriteSubjectsNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteSubjectsInput, UserUncheckedCreateWithoutFavoriteSubjectsInput> | UserCreateWithoutFavoriteSubjectsInput[] | UserUncheckedCreateWithoutFavoriteSubjectsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteSubjectsInput | UserCreateOrConnectWithoutFavoriteSubjectsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavoriteSubjectsInput | UserUpsertWithWhereUniqueWithoutFavoriteSubjectsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavoriteSubjectsInput | UserUpdateWithWhereUniqueWithoutFavoriteSubjectsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavoriteSubjectsInput | UserUpdateManyWithWhereWithoutFavoriteSubjectsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TaskCreateWithoutSubjectInput, TaskUncheckedCreateWithoutSubjectInput> | TaskCreateWithoutSubjectInput[] | TaskUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSubjectInput | TaskCreateOrConnectWithoutSubjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSubjectInput | TaskUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TaskCreateManySubjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSubjectInput | TaskUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSubjectInput | TaskUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAnswersInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type EnumIsCorrectTypeFieldUpdateOperationsInput = {
    set?: $Enums.IsCorrectType
  }

  export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    upsert?: UserUpsertWithoutAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnswersInput, UserUpdateWithoutAnswersInput>, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserQuestionSeedCreateorderInput = {
    set: string[]
  }

  export type UserQuestionSeedUpdateorderInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SubjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<SubjectCreateWithoutTasksInput, SubjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTasksInput
    connect?: SubjectWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutTaskInput = {
    create?: XOR<QuestionCreateWithoutTaskInput, QuestionUncheckedCreateWithoutTaskInput> | QuestionCreateWithoutTaskInput[] | QuestionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTaskInput | QuestionCreateOrConnectWithoutTaskInput[]
    createMany?: QuestionCreateManyTaskInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<QuestionCreateWithoutTaskInput, QuestionUncheckedCreateWithoutTaskInput> | QuestionCreateWithoutTaskInput[] | QuestionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTaskInput | QuestionCreateOrConnectWithoutTaskInput[]
    createMany?: QuestionCreateManyTaskInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type SubjectUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<SubjectCreateWithoutTasksInput, SubjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTasksInput
    upsert?: SubjectUpsertWithoutTasksInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutTasksInput, SubjectUpdateWithoutTasksInput>, SubjectUncheckedUpdateWithoutTasksInput>
  }

  export type QuestionUpdateManyWithoutTaskNestedInput = {
    create?: XOR<QuestionCreateWithoutTaskInput, QuestionUncheckedCreateWithoutTaskInput> | QuestionCreateWithoutTaskInput[] | QuestionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTaskInput | QuestionCreateOrConnectWithoutTaskInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTaskInput | QuestionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: QuestionCreateManyTaskInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTaskInput | QuestionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTaskInput | QuestionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<QuestionCreateWithoutTaskInput, QuestionUncheckedCreateWithoutTaskInput> | QuestionCreateWithoutTaskInput[] | QuestionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTaskInput | QuestionCreateOrConnectWithoutTaskInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTaskInput | QuestionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: QuestionCreateManyTaskInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTaskInput | QuestionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTaskInput | QuestionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVariantInput = {
    create?: XOR<UserCreateWithoutVariantInput, UserUncheckedCreateWithoutVariantInput>
    connectOrCreate?: UserCreateOrConnectWithoutVariantInput
    connect?: UserWhereUniqueInput
  }

  export type UserVariantQuestionCreateNestedManyWithoutVariantInput = {
    create?: XOR<UserVariantQuestionCreateWithoutVariantInput, UserVariantQuestionUncheckedCreateWithoutVariantInput> | UserVariantQuestionCreateWithoutVariantInput[] | UserVariantQuestionUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: UserVariantQuestionCreateOrConnectWithoutVariantInput | UserVariantQuestionCreateOrConnectWithoutVariantInput[]
    createMany?: UserVariantQuestionCreateManyVariantInputEnvelope
    connect?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
  }

  export type UserVariantQuestionUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<UserVariantQuestionCreateWithoutVariantInput, UserVariantQuestionUncheckedCreateWithoutVariantInput> | UserVariantQuestionCreateWithoutVariantInput[] | UserVariantQuestionUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: UserVariantQuestionCreateOrConnectWithoutVariantInput | UserVariantQuestionCreateOrConnectWithoutVariantInput[]
    createMany?: UserVariantQuestionCreateManyVariantInputEnvelope
    connect?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutVariantNestedInput = {
    create?: XOR<UserCreateWithoutVariantInput, UserUncheckedCreateWithoutVariantInput>
    connectOrCreate?: UserCreateOrConnectWithoutVariantInput
    upsert?: UserUpsertWithoutVariantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVariantInput, UserUpdateWithoutVariantInput>, UserUncheckedUpdateWithoutVariantInput>
  }

  export type UserVariantQuestionUpdateManyWithoutVariantNestedInput = {
    create?: XOR<UserVariantQuestionCreateWithoutVariantInput, UserVariantQuestionUncheckedCreateWithoutVariantInput> | UserVariantQuestionCreateWithoutVariantInput[] | UserVariantQuestionUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: UserVariantQuestionCreateOrConnectWithoutVariantInput | UserVariantQuestionCreateOrConnectWithoutVariantInput[]
    upsert?: UserVariantQuestionUpsertWithWhereUniqueWithoutVariantInput | UserVariantQuestionUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: UserVariantQuestionCreateManyVariantInputEnvelope
    set?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    disconnect?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    delete?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    connect?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    update?: UserVariantQuestionUpdateWithWhereUniqueWithoutVariantInput | UserVariantQuestionUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: UserVariantQuestionUpdateManyWithWhereWithoutVariantInput | UserVariantQuestionUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: UserVariantQuestionScalarWhereInput | UserVariantQuestionScalarWhereInput[]
  }

  export type UserVariantQuestionUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<UserVariantQuestionCreateWithoutVariantInput, UserVariantQuestionUncheckedCreateWithoutVariantInput> | UserVariantQuestionCreateWithoutVariantInput[] | UserVariantQuestionUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: UserVariantQuestionCreateOrConnectWithoutVariantInput | UserVariantQuestionCreateOrConnectWithoutVariantInput[]
    upsert?: UserVariantQuestionUpsertWithWhereUniqueWithoutVariantInput | UserVariantQuestionUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: UserVariantQuestionCreateManyVariantInputEnvelope
    set?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    disconnect?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    delete?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    connect?: UserVariantQuestionWhereUniqueInput | UserVariantQuestionWhereUniqueInput[]
    update?: UserVariantQuestionUpdateWithWhereUniqueWithoutVariantInput | UserVariantQuestionUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: UserVariantQuestionUpdateManyWithWhereWithoutVariantInput | UserVariantQuestionUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: UserVariantQuestionScalarWhereInput | UserVariantQuestionScalarWhereInput[]
  }

  export type UserVariantCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<UserVariantCreateWithoutQuestionsInput, UserVariantUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserVariantCreateOrConnectWithoutQuestionsInput
    connect?: UserVariantWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutSelectedInVariantsInput = {
    create?: XOR<QuestionCreateWithoutSelectedInVariantsInput, QuestionUncheckedCreateWithoutSelectedInVariantsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutSelectedInVariantsInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserVariantUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<UserVariantCreateWithoutQuestionsInput, UserVariantUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserVariantCreateOrConnectWithoutQuestionsInput
    upsert?: UserVariantUpsertWithoutQuestionsInput
    connect?: UserVariantWhereUniqueInput
    update?: XOR<XOR<UserVariantUpdateToOneWithWhereWithoutQuestionsInput, UserVariantUpdateWithoutQuestionsInput>, UserVariantUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionUpdateOneRequiredWithoutSelectedInVariantsNestedInput = {
    create?: XOR<QuestionCreateWithoutSelectedInVariantsInput, QuestionUncheckedCreateWithoutSelectedInVariantsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutSelectedInVariantsInput
    upsert?: QuestionUpsertWithoutSelectedInVariantsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutSelectedInVariantsInput, QuestionUpdateWithoutSelectedInVariantsInput>, QuestionUncheckedUpdateWithoutSelectedInVariantsInput>
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRatingFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRating | EnumUserRatingFieldRefInput<$PrismaModel>
    in?: $Enums.UserRating[] | ListEnumUserRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRating[] | ListEnumUserRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRatingFilter<$PrismaModel> | $Enums.UserRating
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRatingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRating | EnumUserRatingFieldRefInput<$PrismaModel>
    in?: $Enums.UserRating[] | ListEnumUserRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRating[] | ListEnumUserRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRatingWithAggregatesFilter<$PrismaModel> | $Enums.UserRating
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRatingFilter<$PrismaModel>
    _max?: NestedEnumUserRatingFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumIsCorrectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IsCorrectType | EnumIsCorrectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IsCorrectType[] | ListEnumIsCorrectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IsCorrectType[] | ListEnumIsCorrectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIsCorrectTypeFilter<$PrismaModel> | $Enums.IsCorrectType
  }

  export type NestedEnumIsCorrectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IsCorrectType | EnumIsCorrectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IsCorrectType[] | ListEnumIsCorrectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IsCorrectType[] | ListEnumIsCorrectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIsCorrectTypeWithAggregatesFilter<$PrismaModel> | $Enums.IsCorrectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIsCorrectTypeFilter<$PrismaModel>
    _max?: NestedEnumIsCorrectTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type SubjectCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    tasksCount?: number
    questionsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutSubjectInput
    tasks?: TaskCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    tasksCount?: number
    questionsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutSubjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutUsersInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutUsersInput, SubjectUncheckedCreateWithoutUsersInput>
  }

  export type UserVariantCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: UserVariantQuestionCreateNestedManyWithoutVariantInput
  }

  export type UserVariantUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: UserVariantQuestionUncheckedCreateNestedManyWithoutVariantInput
  }

  export type UserVariantCreateOrConnectWithoutUserInput = {
    where: UserVariantWhereUniqueInput
    create: XOR<UserVariantCreateWithoutUserInput, UserVariantUncheckedCreateWithoutUserInput>
  }

  export type UserVariantCreateManyUserInputEnvelope = {
    data: UserVariantCreateManyUserInput | UserVariantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAnswerCreateWithoutUserInput = {
    id?: string
    answer: string
    isCorrect: $Enums.IsCorrectType
    subjectSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type UserAnswerUncheckedCreateWithoutUserInput = {
    id?: string
    questionId: string
    answer: string
    isCorrect: $Enums.IsCorrectType
    subjectSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAnswerCreateOrConnectWithoutUserInput = {
    where: UserAnswerWhereUniqueInput
    create: XOR<UserAnswerCreateWithoutUserInput, UserAnswerUncheckedCreateWithoutUserInput>
  }

  export type UserAnswerCreateManyUserInputEnvelope = {
    data: UserAnswerCreateManyUserInput | UserAnswerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenCreateWithoutUserInput = {
    id?: string
    used?: boolean
    expiresAt?: Date | string | null
    tokenValue: string
    type: $Enums.TokenType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: string
    used?: boolean
    expiresAt?: Date | string | null
    tokenValue: string
    type: $Enums.TokenType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubjectUpsertWithWhereUniqueWithoutUsersInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutUsersInput, SubjectUncheckedUpdateWithoutUsersInput>
    create: XOR<SubjectCreateWithoutUsersInput, SubjectUncheckedCreateWithoutUsersInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutUsersInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutUsersInput, SubjectUncheckedUpdateWithoutUsersInput>
  }

  export type SubjectUpdateManyWithWhereWithoutUsersInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutUsersInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    id?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    slug?: StringFilter<"Subject"> | string
    tasksCount?: IntFilter<"Subject"> | number
    questionsCount?: IntFilter<"Subject"> | number
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
  }

  export type UserVariantUpsertWithWhereUniqueWithoutUserInput = {
    where: UserVariantWhereUniqueInput
    update: XOR<UserVariantUpdateWithoutUserInput, UserVariantUncheckedUpdateWithoutUserInput>
    create: XOR<UserVariantCreateWithoutUserInput, UserVariantUncheckedCreateWithoutUserInput>
  }

  export type UserVariantUpdateWithWhereUniqueWithoutUserInput = {
    where: UserVariantWhereUniqueInput
    data: XOR<UserVariantUpdateWithoutUserInput, UserVariantUncheckedUpdateWithoutUserInput>
  }

  export type UserVariantUpdateManyWithWhereWithoutUserInput = {
    where: UserVariantScalarWhereInput
    data: XOR<UserVariantUpdateManyMutationInput, UserVariantUncheckedUpdateManyWithoutUserInput>
  }

  export type UserVariantScalarWhereInput = {
    AND?: UserVariantScalarWhereInput | UserVariantScalarWhereInput[]
    OR?: UserVariantScalarWhereInput[]
    NOT?: UserVariantScalarWhereInput | UserVariantScalarWhereInput[]
    id?: IntFilter<"UserVariant"> | number
    userId?: StringFilter<"UserVariant"> | string
    createdAt?: DateTimeFilter<"UserVariant"> | Date | string
    updatedAt?: DateTimeFilter<"UserVariant"> | Date | string
  }

  export type UserAnswerUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAnswerWhereUniqueInput
    update: XOR<UserAnswerUpdateWithoutUserInput, UserAnswerUncheckedUpdateWithoutUserInput>
    create: XOR<UserAnswerCreateWithoutUserInput, UserAnswerUncheckedCreateWithoutUserInput>
  }

  export type UserAnswerUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAnswerWhereUniqueInput
    data: XOR<UserAnswerUpdateWithoutUserInput, UserAnswerUncheckedUpdateWithoutUserInput>
  }

  export type UserAnswerUpdateManyWithWhereWithoutUserInput = {
    where: UserAnswerScalarWhereInput
    data: XOR<UserAnswerUpdateManyMutationInput, UserAnswerUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAnswerScalarWhereInput = {
    AND?: UserAnswerScalarWhereInput | UserAnswerScalarWhereInput[]
    OR?: UserAnswerScalarWhereInput[]
    NOT?: UserAnswerScalarWhereInput | UserAnswerScalarWhereInput[]
    id?: StringFilter<"UserAnswer"> | string
    userId?: StringFilter<"UserAnswer"> | string
    questionId?: StringFilter<"UserAnswer"> | string
    answer?: StringFilter<"UserAnswer"> | string
    isCorrect?: EnumIsCorrectTypeFilter<"UserAnswer"> | $Enums.IsCorrectType
    subjectSlug?: StringFilter<"UserAnswer"> | string
    createdAt?: DateTimeFilter<"UserAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"UserAnswer"> | Date | string
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
    used?: BoolFilter<"Token"> | boolean
    expiresAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    tokenValue?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
  }

  export type TaskCreateWithoutQuestionsInput = {
    id?: string
    taskNumber: number
    questionsCount?: number
    createdAt?: Date | string
    subject: SubjectCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutQuestionsInput = {
    id?: string
    taskNumber: number
    subjectId: string
    questionsCount?: number
    createdAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutQuestionsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutQuestionsInput, TaskUncheckedCreateWithoutQuestionsInput>
  }

  export type SubjectCreateWithoutQuestionsInput = {
    id?: string
    name: string
    slug: string
    tasksCount?: number
    questionsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutFavoriteSubjectsInput
    tasks?: TaskCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutQuestionsInput = {
    id?: string
    name: string
    slug: string
    tasksCount?: number
    questionsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutFavoriteSubjectsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutQuestionsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutQuestionsInput, SubjectUncheckedCreateWithoutQuestionsInput>
  }

  export type UserAnswerCreateWithoutQuestionInput = {
    id?: string
    answer: string
    isCorrect: $Enums.IsCorrectType
    subjectSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnswersInput
  }

  export type UserAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    userId: string
    answer: string
    isCorrect: $Enums.IsCorrectType
    subjectSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAnswerCreateOrConnectWithoutQuestionInput = {
    where: UserAnswerWhereUniqueInput
    create: XOR<UserAnswerCreateWithoutQuestionInput, UserAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type UserAnswerCreateManyQuestionInputEnvelope = {
    data: UserAnswerCreateManyQuestionInput | UserAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type UserVariantQuestionCreateWithoutQuestionInput = {
    id?: string
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variant: UserVariantCreateNestedOneWithoutQuestionsInput
  }

  export type UserVariantQuestionUncheckedCreateWithoutQuestionInput = {
    id?: string
    variantId: number
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVariantQuestionCreateOrConnectWithoutQuestionInput = {
    where: UserVariantQuestionWhereUniqueInput
    create: XOR<UserVariantQuestionCreateWithoutQuestionInput, UserVariantQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type UserVariantQuestionCreateManyQuestionInputEnvelope = {
    data: UserVariantQuestionCreateManyQuestionInput | UserVariantQuestionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithoutQuestionsInput = {
    update: XOR<TaskUpdateWithoutQuestionsInput, TaskUncheckedUpdateWithoutQuestionsInput>
    create: XOR<TaskCreateWithoutQuestionsInput, TaskUncheckedCreateWithoutQuestionsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutQuestionsInput, TaskUncheckedUpdateWithoutQuestionsInput>
  }

  export type TaskUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskNumber?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskNumber?: IntFieldUpdateOperationsInput | number
    subjectId?: StringFieldUpdateOperationsInput | string
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUpsertWithoutQuestionsInput = {
    update: XOR<SubjectUpdateWithoutQuestionsInput, SubjectUncheckedUpdateWithoutQuestionsInput>
    create: XOR<SubjectCreateWithoutQuestionsInput, SubjectUncheckedCreateWithoutQuestionsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutQuestionsInput, SubjectUncheckedUpdateWithoutQuestionsInput>
  }

  export type SubjectUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tasksCount?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutFavoriteSubjectsNestedInput
    tasks?: TaskUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tasksCount?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutFavoriteSubjectsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type UserAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: UserAnswerWhereUniqueInput
    update: XOR<UserAnswerUpdateWithoutQuestionInput, UserAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<UserAnswerCreateWithoutQuestionInput, UserAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type UserAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: UserAnswerWhereUniqueInput
    data: XOR<UserAnswerUpdateWithoutQuestionInput, UserAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type UserAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: UserAnswerScalarWhereInput
    data: XOR<UserAnswerUpdateManyMutationInput, UserAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type UserVariantQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: UserVariantQuestionWhereUniqueInput
    update: XOR<UserVariantQuestionUpdateWithoutQuestionInput, UserVariantQuestionUncheckedUpdateWithoutQuestionInput>
    create: XOR<UserVariantQuestionCreateWithoutQuestionInput, UserVariantQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type UserVariantQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: UserVariantQuestionWhereUniqueInput
    data: XOR<UserVariantQuestionUpdateWithoutQuestionInput, UserVariantQuestionUncheckedUpdateWithoutQuestionInput>
  }

  export type UserVariantQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: UserVariantQuestionScalarWhereInput
    data: XOR<UserVariantQuestionUpdateManyMutationInput, UserVariantQuestionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type UserVariantQuestionScalarWhereInput = {
    AND?: UserVariantQuestionScalarWhereInput | UserVariantQuestionScalarWhereInput[]
    OR?: UserVariantQuestionScalarWhereInput[]
    NOT?: UserVariantQuestionScalarWhereInput | UserVariantQuestionScalarWhereInput[]
    id?: StringFilter<"UserVariantQuestion"> | string
    variantId?: IntFilter<"UserVariantQuestion"> | number
    questionId?: StringFilter<"UserVariantQuestion"> | string
    order?: IntNullableFilter<"UserVariantQuestion"> | number | null
    createdAt?: DateTimeFilter<"UserVariantQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"UserVariantQuestion"> | Date | string
  }

  export type QuestionCreateWithoutSubjectInput = {
    id?: string
    type?: string
    text?: string | null
    question?: string | null
    experience: number
    correctAnswer?: QuestionCreatecorrectAnswerInput | string[]
    partialAllowed?: boolean
    partialThreshold?: number | null
    explanation?: string | null
    hasCorrectAnswer?: boolean
    audioPath?: string | null
    imagePath?: string | null
    intro?: string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionCreateimagesInput | string[]
    explanationImages?: QuestionCreateexplanationImagesInput | string[]
    globalImages?: QuestionCreateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutQuestionsInput
    answers?: UserAnswerCreateNestedManyWithoutQuestionInput
    selectedInVariants?: UserVariantQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutSubjectInput = {
    id?: string
    taskId: string
    type?: string
    text?: string | null
    question?: string | null
    experience: number
    correctAnswer?: QuestionCreatecorrectAnswerInput | string[]
    partialAllowed?: boolean
    partialThreshold?: number | null
    explanation?: string | null
    hasCorrectAnswer?: boolean
    audioPath?: string | null
    imagePath?: string | null
    intro?: string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionCreateimagesInput | string[]
    explanationImages?: QuestionCreateexplanationImagesInput | string[]
    globalImages?: QuestionCreateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: UserAnswerUncheckedCreateNestedManyWithoutQuestionInput
    selectedInVariants?: UserVariantQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutSubjectInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutSubjectInput, QuestionUncheckedCreateWithoutSubjectInput>
  }

  export type QuestionCreateManySubjectInputEnvelope = {
    data: QuestionCreateManySubjectInput | QuestionCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutFavoriteSubjectsInput = {
    id?: string
    email: string
    password: string
    experience?: number
    rating?: $Enums.UserRating
    isDeactivated?: boolean
    avatar?: string | null
    telegramId?: string | null
    isTwoFactor?: boolean
    totpSecret?: string | null
    tempTotpSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variant?: UserVariantCreateNestedManyWithoutUserInput
    answers?: UserAnswerCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteSubjectsInput = {
    id?: string
    email: string
    password: string
    experience?: number
    rating?: $Enums.UserRating
    isDeactivated?: boolean
    avatar?: string | null
    telegramId?: string | null
    isTwoFactor?: boolean
    totpSecret?: string | null
    tempTotpSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variant?: UserVariantUncheckedCreateNestedManyWithoutUserInput
    answers?: UserAnswerUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteSubjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteSubjectsInput, UserUncheckedCreateWithoutFavoriteSubjectsInput>
  }

  export type TaskCreateWithoutSubjectInput = {
    id?: string
    taskNumber: number
    questionsCount?: number
    createdAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSubjectInput = {
    id?: string
    taskNumber: number
    questionsCount?: number
    createdAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSubjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubjectInput, TaskUncheckedCreateWithoutSubjectInput>
  }

  export type TaskCreateManySubjectInputEnvelope = {
    data: TaskCreateManySubjectInput | TaskCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutSubjectInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutSubjectInput, QuestionUncheckedUpdateWithoutSubjectInput>
    create: XOR<QuestionCreateWithoutSubjectInput, QuestionUncheckedCreateWithoutSubjectInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutSubjectInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutSubjectInput, QuestionUncheckedUpdateWithoutSubjectInput>
  }

  export type QuestionUpdateManyWithWhereWithoutSubjectInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutSubjectInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    subjectId?: StringFilter<"Question"> | string
    taskId?: StringFilter<"Question"> | string
    type?: StringFilter<"Question"> | string
    text?: StringNullableFilter<"Question"> | string | null
    question?: StringNullableFilter<"Question"> | string | null
    experience?: IntFilter<"Question"> | number
    correctAnswer?: StringNullableListFilter<"Question">
    partialAllowed?: BoolFilter<"Question"> | boolean
    partialThreshold?: IntNullableFilter<"Question"> | number | null
    explanation?: StringNullableFilter<"Question"> | string | null
    hasCorrectAnswer?: BoolFilter<"Question"> | boolean
    audioPath?: StringNullableFilter<"Question"> | string | null
    imagePath?: StringNullableFilter<"Question"> | string | null
    intro?: StringNullableFilter<"Question"> | string | null
    speakers?: JsonNullableFilter<"Question">
    statements?: JsonNullableFilter<"Question">
    tableSpec?: JsonNullableFilter<"Question">
    images?: StringNullableListFilter<"Question">
    explanationImages?: StringNullableListFilter<"Question">
    globalImages?: StringNullableListFilter<"Question">
    subQuestions?: JsonNullableFilter<"Question">
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutFavoriteSubjectsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFavoriteSubjectsInput, UserUncheckedUpdateWithoutFavoriteSubjectsInput>
    create: XOR<UserCreateWithoutFavoriteSubjectsInput, UserUncheckedCreateWithoutFavoriteSubjectsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFavoriteSubjectsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFavoriteSubjectsInput, UserUncheckedUpdateWithoutFavoriteSubjectsInput>
  }

  export type UserUpdateManyWithWhereWithoutFavoriteSubjectsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFavoriteSubjectsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    experience?: IntFilter<"User"> | number
    rating?: EnumUserRatingFilter<"User"> | $Enums.UserRating
    isDeactivated?: BoolFilter<"User"> | boolean
    avatar?: StringNullableFilter<"User"> | string | null
    telegramId?: StringNullableFilter<"User"> | string | null
    isTwoFactor?: BoolFilter<"User"> | boolean
    totpSecret?: StringNullableFilter<"User"> | string | null
    tempTotpSecret?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutSubjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutSubjectInput, TaskUncheckedUpdateWithoutSubjectInput>
    create: XOR<TaskCreateWithoutSubjectInput, TaskUncheckedCreateWithoutSubjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutSubjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutSubjectInput, TaskUncheckedUpdateWithoutSubjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutSubjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutSubjectInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    taskNumber?: IntFilter<"Task"> | number
    subjectId?: StringFilter<"Task"> | string
    questionsCount?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type UserCreateWithoutAnswersInput = {
    id?: string
    email: string
    password: string
    experience?: number
    rating?: $Enums.UserRating
    isDeactivated?: boolean
    avatar?: string | null
    telegramId?: string | null
    isTwoFactor?: boolean
    totpSecret?: string | null
    tempTotpSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteSubjects?: SubjectCreateNestedManyWithoutUsersInput
    variant?: UserVariantCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnswersInput = {
    id?: string
    email: string
    password: string
    experience?: number
    rating?: $Enums.UserRating
    isDeactivated?: boolean
    avatar?: string | null
    telegramId?: string | null
    isTwoFactor?: boolean
    totpSecret?: string | null
    tempTotpSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteSubjects?: SubjectUncheckedCreateNestedManyWithoutUsersInput
    variant?: UserVariantUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    type?: string
    text?: string | null
    question?: string | null
    experience: number
    correctAnswer?: QuestionCreatecorrectAnswerInput | string[]
    partialAllowed?: boolean
    partialThreshold?: number | null
    explanation?: string | null
    hasCorrectAnswer?: boolean
    audioPath?: string | null
    imagePath?: string | null
    intro?: string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionCreateimagesInput | string[]
    explanationImages?: QuestionCreateexplanationImagesInput | string[]
    globalImages?: QuestionCreateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutQuestionsInput
    subject: SubjectCreateNestedOneWithoutQuestionsInput
    selectedInVariants?: UserVariantQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    subjectId: string
    taskId: string
    type?: string
    text?: string | null
    question?: string | null
    experience: number
    correctAnswer?: QuestionCreatecorrectAnswerInput | string[]
    partialAllowed?: boolean
    partialThreshold?: number | null
    explanation?: string | null
    hasCorrectAnswer?: boolean
    audioPath?: string | null
    imagePath?: string | null
    intro?: string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionCreateimagesInput | string[]
    explanationImages?: QuestionCreateexplanationImagesInput | string[]
    globalImages?: QuestionCreateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedInVariants?: UserVariantQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type UserUpsertWithoutAnswersInput = {
    update: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    rating?: EnumUserRatingFieldUpdateOperationsInput | $Enums.UserRating
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactor?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tempTotpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteSubjects?: SubjectUpdateManyWithoutUsersNestedInput
    variant?: UserVariantUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    rating?: EnumUserRatingFieldUpdateOperationsInput | $Enums.UserRating
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactor?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tempTotpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteSubjects?: SubjectUncheckedUpdateManyWithoutUsersNestedInput
    variant?: UserVariantUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    correctAnswer?: QuestionUpdatecorrectAnswerInput | string[]
    partialAllowed?: BoolFieldUpdateOperationsInput | boolean
    partialThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    hasCorrectAnswer?: BoolFieldUpdateOperationsInput | boolean
    audioPath?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionUpdateimagesInput | string[]
    explanationImages?: QuestionUpdateexplanationImagesInput | string[]
    globalImages?: QuestionUpdateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutQuestionsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutQuestionsNestedInput
    selectedInVariants?: UserVariantQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    correctAnswer?: QuestionUpdatecorrectAnswerInput | string[]
    partialAllowed?: BoolFieldUpdateOperationsInput | boolean
    partialThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    hasCorrectAnswer?: BoolFieldUpdateOperationsInput | boolean
    audioPath?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionUpdateimagesInput | string[]
    explanationImages?: QuestionUpdateexplanationImagesInput | string[]
    globalImages?: QuestionUpdateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedInVariants?: UserVariantQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type SubjectCreateWithoutTasksInput = {
    id?: string
    name: string
    slug: string
    tasksCount?: number
    questionsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutSubjectInput
    users?: UserCreateNestedManyWithoutFavoriteSubjectsInput
  }

  export type SubjectUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    slug: string
    tasksCount?: number
    questionsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutSubjectInput
    users?: UserUncheckedCreateNestedManyWithoutFavoriteSubjectsInput
  }

  export type SubjectCreateOrConnectWithoutTasksInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTasksInput, SubjectUncheckedCreateWithoutTasksInput>
  }

  export type QuestionCreateWithoutTaskInput = {
    id?: string
    type?: string
    text?: string | null
    question?: string | null
    experience: number
    correctAnswer?: QuestionCreatecorrectAnswerInput | string[]
    partialAllowed?: boolean
    partialThreshold?: number | null
    explanation?: string | null
    hasCorrectAnswer?: boolean
    audioPath?: string | null
    imagePath?: string | null
    intro?: string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionCreateimagesInput | string[]
    explanationImages?: QuestionCreateexplanationImagesInput | string[]
    globalImages?: QuestionCreateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    subject: SubjectCreateNestedOneWithoutQuestionsInput
    answers?: UserAnswerCreateNestedManyWithoutQuestionInput
    selectedInVariants?: UserVariantQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutTaskInput = {
    id?: string
    subjectId: string
    type?: string
    text?: string | null
    question?: string | null
    experience: number
    correctAnswer?: QuestionCreatecorrectAnswerInput | string[]
    partialAllowed?: boolean
    partialThreshold?: number | null
    explanation?: string | null
    hasCorrectAnswer?: boolean
    audioPath?: string | null
    imagePath?: string | null
    intro?: string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionCreateimagesInput | string[]
    explanationImages?: QuestionCreateexplanationImagesInput | string[]
    globalImages?: QuestionCreateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: UserAnswerUncheckedCreateNestedManyWithoutQuestionInput
    selectedInVariants?: UserVariantQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutTaskInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTaskInput, QuestionUncheckedCreateWithoutTaskInput>
  }

  export type QuestionCreateManyTaskInputEnvelope = {
    data: QuestionCreateManyTaskInput | QuestionCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type SubjectUpsertWithoutTasksInput = {
    update: XOR<SubjectUpdateWithoutTasksInput, SubjectUncheckedUpdateWithoutTasksInput>
    create: XOR<SubjectCreateWithoutTasksInput, SubjectUncheckedCreateWithoutTasksInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutTasksInput, SubjectUncheckedUpdateWithoutTasksInput>
  }

  export type SubjectUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tasksCount?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutSubjectNestedInput
    users?: UserUpdateManyWithoutFavoriteSubjectsNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tasksCount?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutSubjectNestedInput
    users?: UserUncheckedUpdateManyWithoutFavoriteSubjectsNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutTaskInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutTaskInput, QuestionUncheckedUpdateWithoutTaskInput>
    create: XOR<QuestionCreateWithoutTaskInput, QuestionUncheckedCreateWithoutTaskInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutTaskInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutTaskInput, QuestionUncheckedUpdateWithoutTaskInput>
  }

  export type QuestionUpdateManyWithWhereWithoutTaskInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutTaskInput>
  }

  export type UserCreateWithoutVariantInput = {
    id?: string
    email: string
    password: string
    experience?: number
    rating?: $Enums.UserRating
    isDeactivated?: boolean
    avatar?: string | null
    telegramId?: string | null
    isTwoFactor?: boolean
    totpSecret?: string | null
    tempTotpSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteSubjects?: SubjectCreateNestedManyWithoutUsersInput
    answers?: UserAnswerCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVariantInput = {
    id?: string
    email: string
    password: string
    experience?: number
    rating?: $Enums.UserRating
    isDeactivated?: boolean
    avatar?: string | null
    telegramId?: string | null
    isTwoFactor?: boolean
    totpSecret?: string | null
    tempTotpSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteSubjects?: SubjectUncheckedCreateNestedManyWithoutUsersInput
    answers?: UserAnswerUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVariantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVariantInput, UserUncheckedCreateWithoutVariantInput>
  }

  export type UserVariantQuestionCreateWithoutVariantInput = {
    id?: string
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutSelectedInVariantsInput
  }

  export type UserVariantQuestionUncheckedCreateWithoutVariantInput = {
    id?: string
    questionId: string
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVariantQuestionCreateOrConnectWithoutVariantInput = {
    where: UserVariantQuestionWhereUniqueInput
    create: XOR<UserVariantQuestionCreateWithoutVariantInput, UserVariantQuestionUncheckedCreateWithoutVariantInput>
  }

  export type UserVariantQuestionCreateManyVariantInputEnvelope = {
    data: UserVariantQuestionCreateManyVariantInput | UserVariantQuestionCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVariantInput = {
    update: XOR<UserUpdateWithoutVariantInput, UserUncheckedUpdateWithoutVariantInput>
    create: XOR<UserCreateWithoutVariantInput, UserUncheckedCreateWithoutVariantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVariantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVariantInput, UserUncheckedUpdateWithoutVariantInput>
  }

  export type UserUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    rating?: EnumUserRatingFieldUpdateOperationsInput | $Enums.UserRating
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactor?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tempTotpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteSubjects?: SubjectUpdateManyWithoutUsersNestedInput
    answers?: UserAnswerUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    rating?: EnumUserRatingFieldUpdateOperationsInput | $Enums.UserRating
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactor?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tempTotpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteSubjects?: SubjectUncheckedUpdateManyWithoutUsersNestedInput
    answers?: UserAnswerUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserVariantQuestionUpsertWithWhereUniqueWithoutVariantInput = {
    where: UserVariantQuestionWhereUniqueInput
    update: XOR<UserVariantQuestionUpdateWithoutVariantInput, UserVariantQuestionUncheckedUpdateWithoutVariantInput>
    create: XOR<UserVariantQuestionCreateWithoutVariantInput, UserVariantQuestionUncheckedCreateWithoutVariantInput>
  }

  export type UserVariantQuestionUpdateWithWhereUniqueWithoutVariantInput = {
    where: UserVariantQuestionWhereUniqueInput
    data: XOR<UserVariantQuestionUpdateWithoutVariantInput, UserVariantQuestionUncheckedUpdateWithoutVariantInput>
  }

  export type UserVariantQuestionUpdateManyWithWhereWithoutVariantInput = {
    where: UserVariantQuestionScalarWhereInput
    data: XOR<UserVariantQuestionUpdateManyMutationInput, UserVariantQuestionUncheckedUpdateManyWithoutVariantInput>
  }

  export type UserVariantCreateWithoutQuestionsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVariantInput
  }

  export type UserVariantUncheckedCreateWithoutQuestionsInput = {
    id?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVariantCreateOrConnectWithoutQuestionsInput = {
    where: UserVariantWhereUniqueInput
    create: XOR<UserVariantCreateWithoutQuestionsInput, UserVariantUncheckedCreateWithoutQuestionsInput>
  }

  export type QuestionCreateWithoutSelectedInVariantsInput = {
    id?: string
    type?: string
    text?: string | null
    question?: string | null
    experience: number
    correctAnswer?: QuestionCreatecorrectAnswerInput | string[]
    partialAllowed?: boolean
    partialThreshold?: number | null
    explanation?: string | null
    hasCorrectAnswer?: boolean
    audioPath?: string | null
    imagePath?: string | null
    intro?: string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionCreateimagesInput | string[]
    explanationImages?: QuestionCreateexplanationImagesInput | string[]
    globalImages?: QuestionCreateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutQuestionsInput
    subject: SubjectCreateNestedOneWithoutQuestionsInput
    answers?: UserAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutSelectedInVariantsInput = {
    id?: string
    subjectId: string
    taskId: string
    type?: string
    text?: string | null
    question?: string | null
    experience: number
    correctAnswer?: QuestionCreatecorrectAnswerInput | string[]
    partialAllowed?: boolean
    partialThreshold?: number | null
    explanation?: string | null
    hasCorrectAnswer?: boolean
    audioPath?: string | null
    imagePath?: string | null
    intro?: string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionCreateimagesInput | string[]
    explanationImages?: QuestionCreateexplanationImagesInput | string[]
    globalImages?: QuestionCreateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: UserAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutSelectedInVariantsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutSelectedInVariantsInput, QuestionUncheckedCreateWithoutSelectedInVariantsInput>
  }

  export type UserVariantUpsertWithoutQuestionsInput = {
    update: XOR<UserVariantUpdateWithoutQuestionsInput, UserVariantUncheckedUpdateWithoutQuestionsInput>
    create: XOR<UserVariantCreateWithoutQuestionsInput, UserVariantUncheckedCreateWithoutQuestionsInput>
    where?: UserVariantWhereInput
  }

  export type UserVariantUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: UserVariantWhereInput
    data: XOR<UserVariantUpdateWithoutQuestionsInput, UserVariantUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserVariantUpdateWithoutQuestionsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVariantNestedInput
  }

  export type UserVariantUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithoutSelectedInVariantsInput = {
    update: XOR<QuestionUpdateWithoutSelectedInVariantsInput, QuestionUncheckedUpdateWithoutSelectedInVariantsInput>
    create: XOR<QuestionCreateWithoutSelectedInVariantsInput, QuestionUncheckedCreateWithoutSelectedInVariantsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutSelectedInVariantsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutSelectedInVariantsInput, QuestionUncheckedUpdateWithoutSelectedInVariantsInput>
  }

  export type QuestionUpdateWithoutSelectedInVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    correctAnswer?: QuestionUpdatecorrectAnswerInput | string[]
    partialAllowed?: BoolFieldUpdateOperationsInput | boolean
    partialThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    hasCorrectAnswer?: BoolFieldUpdateOperationsInput | boolean
    audioPath?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionUpdateimagesInput | string[]
    explanationImages?: QuestionUpdateexplanationImagesInput | string[]
    globalImages?: QuestionUpdateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutQuestionsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: UserAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutSelectedInVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    correctAnswer?: QuestionUpdatecorrectAnswerInput | string[]
    partialAllowed?: BoolFieldUpdateOperationsInput | boolean
    partialThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    hasCorrectAnswer?: BoolFieldUpdateOperationsInput | boolean
    audioPath?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionUpdateimagesInput | string[]
    explanationImages?: QuestionUpdateexplanationImagesInput | string[]
    globalImages?: QuestionUpdateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: UserAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserCreateWithoutTokensInput = {
    id?: string
    email: string
    password: string
    experience?: number
    rating?: $Enums.UserRating
    isDeactivated?: boolean
    avatar?: string | null
    telegramId?: string | null
    isTwoFactor?: boolean
    totpSecret?: string | null
    tempTotpSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteSubjects?: SubjectCreateNestedManyWithoutUsersInput
    variant?: UserVariantCreateNestedManyWithoutUserInput
    answers?: UserAnswerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string
    email: string
    password: string
    experience?: number
    rating?: $Enums.UserRating
    isDeactivated?: boolean
    avatar?: string | null
    telegramId?: string | null
    isTwoFactor?: boolean
    totpSecret?: string | null
    tempTotpSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteSubjects?: SubjectUncheckedCreateNestedManyWithoutUsersInput
    variant?: UserVariantUncheckedCreateNestedManyWithoutUserInput
    answers?: UserAnswerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    rating?: EnumUserRatingFieldUpdateOperationsInput | $Enums.UserRating
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactor?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tempTotpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteSubjects?: SubjectUpdateManyWithoutUsersNestedInput
    variant?: UserVariantUpdateManyWithoutUserNestedInput
    answers?: UserAnswerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    rating?: EnumUserRatingFieldUpdateOperationsInput | $Enums.UserRating
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactor?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tempTotpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteSubjects?: SubjectUncheckedUpdateManyWithoutUsersNestedInput
    variant?: UserVariantUncheckedUpdateManyWithoutUserNestedInput
    answers?: UserAnswerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserVariantCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAnswerCreateManyUserInput = {
    id?: string
    questionId: string
    answer: string
    isCorrect: $Enums.IsCorrectType
    subjectSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenCreateManyUserInput = {
    id?: string
    used?: boolean
    expiresAt?: Date | string | null
    tokenValue: string
    type: $Enums.TokenType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tasksCount?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutSubjectNestedInput
    tasks?: TaskUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tasksCount?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutSubjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tasksCount?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVariantUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: UserVariantQuestionUpdateManyWithoutVariantNestedInput
  }

  export type UserVariantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: UserVariantQuestionUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type UserVariantUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: EnumIsCorrectTypeFieldUpdateOperationsInput | $Enums.IsCorrectType
    subjectSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type UserAnswerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: EnumIsCorrectTypeFieldUpdateOperationsInput | $Enums.IsCorrectType
    subjectSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: EnumIsCorrectTypeFieldUpdateOperationsInput | $Enums.IsCorrectType
    subjectSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenValue?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenValue?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenValue?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswerCreateManyQuestionInput = {
    id?: string
    userId: string
    answer: string
    isCorrect: $Enums.IsCorrectType
    subjectSlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVariantQuestionCreateManyQuestionInput = {
    id?: string
    variantId: number
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: EnumIsCorrectTypeFieldUpdateOperationsInput | $Enums.IsCorrectType
    subjectSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type UserAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: EnumIsCorrectTypeFieldUpdateOperationsInput | $Enums.IsCorrectType
    subjectSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: EnumIsCorrectTypeFieldUpdateOperationsInput | $Enums.IsCorrectType
    subjectSlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVariantQuestionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: UserVariantUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type UserVariantQuestionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVariantQuestionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManySubjectInput = {
    id?: string
    taskId: string
    type?: string
    text?: string | null
    question?: string | null
    experience: number
    correctAnswer?: QuestionCreatecorrectAnswerInput | string[]
    partialAllowed?: boolean
    partialThreshold?: number | null
    explanation?: string | null
    hasCorrectAnswer?: boolean
    audioPath?: string | null
    imagePath?: string | null
    intro?: string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionCreateimagesInput | string[]
    explanationImages?: QuestionCreateexplanationImagesInput | string[]
    globalImages?: QuestionCreateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManySubjectInput = {
    id?: string
    taskNumber: number
    questionsCount?: number
    createdAt?: Date | string
  }

  export type QuestionUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    correctAnswer?: QuestionUpdatecorrectAnswerInput | string[]
    partialAllowed?: BoolFieldUpdateOperationsInput | boolean
    partialThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    hasCorrectAnswer?: BoolFieldUpdateOperationsInput | boolean
    audioPath?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionUpdateimagesInput | string[]
    explanationImages?: QuestionUpdateexplanationImagesInput | string[]
    globalImages?: QuestionUpdateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: UserAnswerUpdateManyWithoutQuestionNestedInput
    selectedInVariants?: UserVariantQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    correctAnswer?: QuestionUpdatecorrectAnswerInput | string[]
    partialAllowed?: BoolFieldUpdateOperationsInput | boolean
    partialThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    hasCorrectAnswer?: BoolFieldUpdateOperationsInput | boolean
    audioPath?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionUpdateimagesInput | string[]
    explanationImages?: QuestionUpdateexplanationImagesInput | string[]
    globalImages?: QuestionUpdateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: UserAnswerUncheckedUpdateManyWithoutQuestionNestedInput
    selectedInVariants?: UserVariantQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    correctAnswer?: QuestionUpdatecorrectAnswerInput | string[]
    partialAllowed?: BoolFieldUpdateOperationsInput | boolean
    partialThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    hasCorrectAnswer?: BoolFieldUpdateOperationsInput | boolean
    audioPath?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionUpdateimagesInput | string[]
    explanationImages?: QuestionUpdateexplanationImagesInput | string[]
    globalImages?: QuestionUpdateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutFavoriteSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    rating?: EnumUserRatingFieldUpdateOperationsInput | $Enums.UserRating
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactor?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tempTotpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: UserVariantUpdateManyWithoutUserNestedInput
    answers?: UserAnswerUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    rating?: EnumUserRatingFieldUpdateOperationsInput | $Enums.UserRating
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactor?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tempTotpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: UserVariantUncheckedUpdateManyWithoutUserNestedInput
    answers?: UserAnswerUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFavoriteSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    rating?: EnumUserRatingFieldUpdateOperationsInput | $Enums.UserRating
    isDeactivated?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactor?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    tempTotpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskNumber?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskNumber?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskNumber?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyTaskInput = {
    id?: string
    subjectId: string
    type?: string
    text?: string | null
    question?: string | null
    experience: number
    correctAnswer?: QuestionCreatecorrectAnswerInput | string[]
    partialAllowed?: boolean
    partialThreshold?: number | null
    explanation?: string | null
    hasCorrectAnswer?: boolean
    audioPath?: string | null
    imagePath?: string | null
    intro?: string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionCreateimagesInput | string[]
    explanationImages?: QuestionCreateexplanationImagesInput | string[]
    globalImages?: QuestionCreateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    correctAnswer?: QuestionUpdatecorrectAnswerInput | string[]
    partialAllowed?: BoolFieldUpdateOperationsInput | boolean
    partialThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    hasCorrectAnswer?: BoolFieldUpdateOperationsInput | boolean
    audioPath?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionUpdateimagesInput | string[]
    explanationImages?: QuestionUpdateexplanationImagesInput | string[]
    globalImages?: QuestionUpdateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: UserAnswerUpdateManyWithoutQuestionNestedInput
    selectedInVariants?: UserVariantQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    correctAnswer?: QuestionUpdatecorrectAnswerInput | string[]
    partialAllowed?: BoolFieldUpdateOperationsInput | boolean
    partialThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    hasCorrectAnswer?: BoolFieldUpdateOperationsInput | boolean
    audioPath?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionUpdateimagesInput | string[]
    explanationImages?: QuestionUpdateexplanationImagesInput | string[]
    globalImages?: QuestionUpdateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: UserAnswerUncheckedUpdateManyWithoutQuestionNestedInput
    selectedInVariants?: UserVariantQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    correctAnswer?: QuestionUpdatecorrectAnswerInput | string[]
    partialAllowed?: BoolFieldUpdateOperationsInput | boolean
    partialThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    hasCorrectAnswer?: BoolFieldUpdateOperationsInput | boolean
    audioPath?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    speakers?: NullableJsonNullValueInput | InputJsonValue
    statements?: NullableJsonNullValueInput | InputJsonValue
    tableSpec?: NullableJsonNullValueInput | InputJsonValue
    images?: QuestionUpdateimagesInput | string[]
    explanationImages?: QuestionUpdateexplanationImagesInput | string[]
    globalImages?: QuestionUpdateglobalImagesInput | string[]
    subQuestions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVariantQuestionCreateManyVariantInput = {
    id?: string
    questionId: string
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVariantQuestionUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutSelectedInVariantsNestedInput
  }

  export type UserVariantQuestionUncheckedUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVariantQuestionUncheckedUpdateManyWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}