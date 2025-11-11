# Инструкция по настройке деплоя на Vercel / Vercel Deployment Configuration

## Русский

### Как сделать эту ветку основной для деплоя

Для того чтобы Vercel деплоил проект с ветки `copilot/set-main-branch-for-deployment`, выполните следующие шаги:

#### Вариант 1: Изменить настройки проекта Vercel (Рекомендуется)

1. Зайдите в [Vercel Dashboard](https://vercel.com/dashboard)
2. Выберите ваш проект
3. Перейдите в **Settings** → **Git**
4. В разделе **Production Branch** измените значение с `main` на `copilot/set-main-branch-for-deployment`
5. В разделе **Settings** → **General** найдите **Root Directory**
6. Установите Root Directory в `viks_media-main`
7. Сохраните изменения
8. Следующий деплой будет автоматически произведён с этой ветки и директории

#### Вариант 2: Изменить default branch в GitHub

1. Зайдите в [GitHub Repository Settings](https://github.com/VityaAresov/VIKSProduction/settings)
2. В разделе **General** → **Default branch**
3. Нажмите кнопку переключения веток и выберите `copilot/set-main-branch-for-deployment`
4. Подтвердите изменение
5. В Vercel Dashboard настройте **Root Directory** на `viks_media-main` (Settings → General)
6. Vercel автоматически начнёт деплоить с новой default branch

#### Вариант 3: Влить эту ветку в main

Если вы хотите сохранить `main` как основную ветку:
1. Создайте Pull Request из `copilot/set-main-branch-for-deployment` в `main`
2. После review и мерджа, настройте Root Directory в Vercel на `viks_media-main`
3. Vercel автоматически задеплоит изменения

### Важно: Настройка Root Directory

Проект находится в подпапке `viks_media-main`. В настройках Vercel **обязательно** установите:
- **Root Directory**: `viks_media-main`

Это можно сделать в Vercel Dashboard → Project Settings → General → Root Directory.

---

## English

### How to Make This Branch the Main Deployment Branch

To make Vercel deploy from the `copilot/set-main-branch-for-deployment` branch, follow these steps:

#### Option 1: Change Vercel Project Settings (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to **Settings** → **Git**
4. In the **Production Branch** section, change from `main` to `copilot/set-main-branch-for-deployment`
5. Navigate to **Settings** → **General** and find **Root Directory**
6. Set Root Directory to `viks_media-main`
7. Save changes
8. The next deployment will automatically use this branch and directory

#### Option 2: Change Default Branch in GitHub

1. Go to [GitHub Repository Settings](https://github.com/VityaAresov/VIKSProduction/settings)
2. Under **General** → **Default branch**
3. Click the switch branches button and select `copilot/set-main-branch-for-deployment`
4. Confirm the change
5. In Vercel Dashboard, set **Root Directory** to `viks_media-main` (Settings → General)
6. Vercel will automatically start deploying from the new default branch

#### Option 3: Merge This Branch into Main

If you want to keep `main` as the primary branch:
1. Create a Pull Request from `copilot/set-main-branch-for-deployment` to `main`
2. After review and merge, configure Root Directory in Vercel to `viks_media-main`
3. Vercel will automatically deploy the changes

### Important: Root Directory Configuration

The project is located in the `viks_media-main` subfolder. In Vercel settings, you **must** set:
- **Root Directory**: `viks_media-main`

This can be done in Vercel Dashboard → Project Settings → General → Root Directory.
