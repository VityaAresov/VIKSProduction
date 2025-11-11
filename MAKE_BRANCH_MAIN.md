# Как сделать эту ветку основной / How to Make This Branch the Main Branch

## Русский

Этот документ описывает шаги для того, чтобы сделать ветку `copilot/make-branch-main` основной веткой репозитория.

### Вариант 1: Изменить ветку по умолчанию в GitHub (Рекомендуется)

1. Перейдите в настройки репозитория на GitHub:
   - Откройте https://github.com/VityaAresov/VIKSProduction
   - Нажмите на "Settings" (Настройки)

2. Найдите раздел "Default branch" (Ветка по умолчанию):
   - В левом меню выберите "General"
   - Прокрутите до раздела "Default branch"

3. Измените ветку по умолчанию:
   - Нажмите на кнопку со стрелками рядом с текущей веткой по умолчанию
   - Выберите `copilot/make-branch-main` из списка
   - Нажмите "Update" (Обновить)
   - Подтвердите изменение в диалоговом окне

4. (Опционально) Удалите старую ветку `main`, если она больше не нужна

### Вариант 2: Слить изменения в main и удалить эту ветку

Если вы хотите сохранить имя ветки `main`:

1. Создайте Pull Request из `copilot/make-branch-main` в `main`
2. Проверьте и одобрите изменения
3. Слейте Pull Request
4. Удалите ветку `copilot/make-branch-main` после слияния

### Вариант 3: Переименовать ветку (через командную строку)

```bash
# Локально переименовать ветку
git branch -m copilot/make-branch-main main

# Отправить переименованную ветку
git push origin -u main

# Удалить старую ветку на сервере
git push origin --delete copilot/make-branch-main

# Изменить ветку по умолчанию через веб-интерфейс GitHub (см. Вариант 1)
```

---

## English

This document describes the steps to make the `copilot/make-branch-main` branch the main/default branch of the repository.

### Option 1: Change Default Branch in GitHub Settings (Recommended)

1. Navigate to repository settings on GitHub:
   - Go to https://github.com/VityaAresov/VIKSProduction
   - Click on "Settings"

2. Locate the "Default branch" section:
   - In the left sidebar, select "General"
   - Scroll down to the "Default branch" section

3. Change the default branch:
   - Click the switch/arrow button next to the current default branch
   - Select `copilot/make-branch-main` from the dropdown
   - Click "Update"
   - Confirm the change in the dialog box

4. (Optional) Delete the old `main` branch if no longer needed

### Option 2: Merge Changes into main and Delete This Branch

If you want to keep the `main` branch name:

1. Create a Pull Request from `copilot/make-branch-main` to `main`
2. Review and approve the changes
3. Merge the Pull Request
4. Delete the `copilot/make-branch-main` branch after merging

### Option 3: Rename Branch (via command line)

```bash
# Locally rename the branch
git branch -m copilot/make-branch-main main

# Push the renamed branch
git push origin -u main

# Delete the old branch on the server
git push origin --delete copilot/make-branch-main

# Change default branch via GitHub web interface (see Option 1)
```

---

## Current Status

- **Current Branch**: `copilot/make-branch-main`
- **Current Default Branch**: `main`
- **Repository**: VityaAresov/VIKSProduction

## Notes

- Changing the default branch requires repository administrator permissions
- After changing the default branch, update any CI/CD pipelines or deployment scripts that reference the old branch name
- Team members will need to update their local repositories after the change
