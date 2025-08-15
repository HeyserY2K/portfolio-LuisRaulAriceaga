'use client';

import React, { createContext, useContext, useMemo } from 'react';

export type Message = string | MessageMap;
export interface MessageMap {
  [key: string]: Message;
}

type I18nContextValue = {
  locale: string;
  messages: MessageMap;
  t: (keyPath: string, values?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getByPath(messages: MessageMap, keyPath: string): unknown {
  const segments = keyPath.split('.');
  let current: unknown = messages;
  for (const segment of segments) {
    if (
      typeof current === 'object' &&
      current !== null &&
      segment in (current as Record<string, unknown>)
    ) {
      current = (current as Record<string, unknown>)[segment];
    } else {
      return undefined;
    }
  }
  return current;
}

function format(template: string, values?: Record<string, string | number>): string {
  if (!values) return template;
  return template.replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? ''));
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return ctx;
}

export default function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: MessageMap;
  children: React.ReactNode;
}) {
  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      messages,
      t: (keyPath, values) => {
        const raw = getByPath(messages, keyPath);
        if (typeof raw !== 'string') return keyPath;
        return format(raw, values);
      },
    };
  }, [locale, messages]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
