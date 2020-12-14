import { IncomingMessage } from 'http';
import { NextPageContext } from 'next';
import { I18n } from 'next-i18next';

export interface PageContext extends NextPageContext {
  req: IncomingMessage & { language: string; i18n: I18n };
}
