# Инструкция по настройке деплоя на Vercel / Vercel Deployment Configuration

## Русский

### Как сделать эту ветку основной для деплоя

Для того чтобы Vercel деплоил проект с ветки `copilot/set-main-branch-for-deployment`, выполните следующие шаги:

#### Вариант 1: Изменить настройки проекта Vercel (Рекомендуется)

1. Зайдите в [Vercel Dashboard](https://vercel.com/dashboard)
2. Выберите ваш проект
3. Перейдите в **Settings** → **Git**
4. В разделе **Production Branch** измените значение с `main` на `copilot/set-main-branch-for-deployment`
5. Сохраните изменения
6. Следующий деплой будет автоматически произведён с этой ветки

#### Вариант 2: Изменить default branch в GitHub

1. Зайдите в [GitHub Repository Settings](https://github.com/VityaAresov/VIKSProduction/settings)
2. В разделе **General** → **Default branch**
3. Нажмите кнопку переключения веток и выберите `copilot/set-main-branch-for-deployment`
4. Подтвердите изменение
5. Vercel автоматически начнёт деплоить с новой default branch

#### Вариант 3: Влить эту ветку в main

Если вы хотите сохранить `main` как основную ветку:
1. Создайте Pull Request из `copilot/set-main-branch-for-deployment` в `main`
2. После review и мерджа, Vercel автоматически задеплоит изменения

### Конфигурация проекта

Файл `vercel.json` уже настроен для корректного деплоя проекта из папки `viks_media-main`.

---

## English

### How to Make This Branch the Main Deployment Branch

To make Vercel deploy from the `copilot/set-main-branch-for-deployment` branch, follow these steps:

#### Option 1: Change Vercel Project Settings (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to **Settings** → **Git**
4. In the **Production Branch** section, change from `main` to `copilot/set-main-branch-for-deployment`
5. Save changes
6. The next deployment will automatically use this branch

#### Option 2: Change Default Branch in GitHub

1. Go to [GitHub Repository Settings](https://github.com/VityaAresov/VIKSProduction/settings)
2. Under **General** → **Default branch**
3. Click the switch branches button and select `copilot/set-main-branch-for-deployment`
4. Confirm the change
5. Vercel will automatically start deploying from the new default branch

#### Option 3: Merge This Branch into Main

If you want to keep `main` as the primary branch:
1. Create a Pull Request from `copilot/set-main-branch-for-deployment` to `main`
2. After review and merge, Vercel will automatically deploy the changes

### Project Configuration

The `vercel.json` file is already configured for proper deployment from the `viks_media-main` folder.
