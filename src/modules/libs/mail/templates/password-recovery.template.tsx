import { Body, Head, Heading, Link, Preview, Section, Tailwind, Text } from '@react-email/components';
import { Html } from '@react-email/html';
import * as React from 'react';
import type { SessionMetadata } from 'src/shared/types/session-metadata.type';

interface PasswordRecoveryTemplateProps {
  token: string;
  metadata: SessionMetadata;
}

export function PasswordRecoveryTemplate({ token, metadata }: PasswordRecoveryTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Сброс пароля</Preview>
      <Tailwind>
        <Body className="max-w-2xl mx-auto p-6 bg-slate-50">
          <Section className="text-center mb-8">
            <Heading className="text-3xl text-black font-bold">Сброс пароля</Heading>
            <Text className="text-base text-black mt-2">Вы запросили сброс пароля для вашей учетной записи.</Text>
            <Text className="text-base text-black mt-2">Чтобы создать новый пароль, введите на сайте код подтверждения:</Text>
            <Text className="text-base text-black mt-2">{token}</Text>
          </Section>
          <Section className="bg-gray-100 round-lg p-6 mb-6">
            <Heading className="text-xl font-semibol text-[#18B9AE]">Информация о запросе:</Heading>
            <ul className="list-disc list-inside mt-2 text-black">
              <li>
                Расположение: {metadata.location.country}, {metadata.location.city}
              </li>
              <li>Операционная сеть: {metadata.device.os}</li>
              <li>Браузер: {metadata.device.browser}</li>
              <li>IP-адрес: {metadata.ip}</li>
            </ul>
            <Text className="text-gray-600 mt-2">
              Если вы не инициировали этот запрос, пожалуйста, проигнорируйте это сообщение
            </Text>
          </Section>
          <Section className="text-center mt-8">
            <Text className="text-gray-600">
              Если у вас есть вопросы или вы столкнулись с трудностями, не стесняйтесь обращаться в нашу службу поддержки по
              адресу
              <Link href="mailto:help@testream.ru" className="text-[#18b9ae] underline">
                help@testream.ru
              </Link>
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
