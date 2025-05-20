// vercel: // ContactForm.tsx
// Добавлена директива "use client" для Next.js App Router
// Добавлено поле "Phone Number"

"use client";

import React, {useState} from 'react';
// Убедитесь, что библиотека react-icons установлена: npm install react-icons
import {FaPhoneAlt, FaEnvelope} from 'react-icons/fa';
// Убедитесь, что файл стилей существует и путь к нему верный
import styles from './ContactForm.module.css';

interface FormData {
    firstName: string;
    lastName: string;
    companyEmail: string;
    phoneNumber: string;
    mediaBudget: string;
    message: string;
}

const ContactForm: React.FC = () => {
    // Состояние для данных формы - ДОБАВЛЕНО поле phoneNumber
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        companyEmail: '',
        phoneNumber: '', // <<<--- ДОБАВЛЕНО ЗДЕСЬ
        mediaBudget: '',
        message: '',
    });

    // Состояние для процесса отправки и результата
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Сообщения об успехе/ошибке по умолчанию на английском
    const [submitStatus, setSubmitStatus] = useState<{ success: boolean | null; message: string }>({
        success: null,
        message: '',
    });

    // Обработчик изменения полей ввода
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Обработчик отправки формы
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Предотвращаем стандартную отправку формы
        setIsSubmitting(true); // Устанавливаем флаг отправки
        setSubmitStatus({success: null, message: ''}); // Сбрасываем статус

        const backendUrl = '/api/send-telegram'; // Относительный путь к Vercel функции

        try {
            // Отправляем POST-запрос на бэкенд
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Указываем, что отправляем JSON
                },
                body: JSON.stringify(formData), // Преобразуем данные формы в JSON-строку
            });

            // Пытаемся распарсить ответ от сервера как JSON
            const result = await response.json();

            // Проверяем статус ответа и поле 'success' в JSON
            if (response.ok && result.success) {
                // Используем сообщение от сервера или стандартное английское
                setSubmitStatus({success: true, message: result.message || 'Message sent successfully!'});
                // Очищаем форму в случае успеха - ДОБАВЛЕНО обнуление phoneNumber
                setFormData({
                    firstName: '',
                    lastName: '',
                    companyEmail: '',
                    phoneNumber: '', // <<<--- ДОБАВЛЕНО ЗДЕСЬ
                    mediaBudget: '',
                    message: '',
                });
            } else {
                // Используем сообщение от сервера или стандартное английское
                throw new Error(result.message || 'Server processing error.');
            }
        } catch (error) {
            // Обрабатываем ошибки сети или ошибки парсинга JSON
            console.error('Form submission error:', error); // Лог ошибки на английском для консоли
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred while sending. Please try again.';
            // Улучшенная обработка ошибки парсинга JSON (сообщения на английском)
            if (errorMessage.toLowerCase().includes('failed to fetch') || errorMessage.toLowerCase().includes('networkerror')) {
                setSubmitStatus({
                    success: false,
                    message: 'Network error. Could not contact server.'
                });
            } else if (errorMessage.includes('Unexpected token') || errorMessage.includes('Unexpected end of JSON input') || errorMessage.toLowerCase().includes('json.parse')) {
                setSubmitStatus({
                    success: false,
                    message: 'Server response error. Check Vercel function logs.'
                });
            } else {
                setSubmitStatus({ success: false, message: errorMessage });
            }
        } finally {
            // В любом случае убираем флаг отправки
            setIsSubmitting(false);
        }
    };

    // Разметка JSX для формы и контактной информации (текст на английском)
    return (
        <div className={styles.pageContainer}>
            <div className={styles.gridContainer}>
                {/* Левая колонка */}
                <div className={styles.leftColumn}>
                    {/* ... (existing left column content) ... */}
                    <h1 className={styles.heading}>
                        Ready to work with <br/> VIKS Agency?
                    </h1>
                    <p className={styles.paragraph}>
                        We seek lasting relationships to help our clients unlock rapid growth at efficient economics.
                        Tell us where you are and where you want to be. </p>
                    <div className={styles.contactInfo}>
                        <p className={styles.contactLine}>
                            <FaPhoneAlt className={styles.contactIcon}/>
                            <span><strong>Call Us:</strong> +1 (954) 774-5305</span>
                        </p>
                        <p className={styles.contactLine}>
                            <FaEnvelope className={styles.contactIcon}/>
                            <span><strong>Write To Us:</strong> info@viksproduction.com</span>
                        </p>
                    </div>
                </div>

                {/* Правая колонка (Форма) */}
                <div className={styles.rightColumn}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        {/* Поля формы (метки на английском) */}
                        <div className={styles.formRow}>
                            {/* ... (First Name and Last Name fields) ... */}
                            <div className={styles.formGroup}>
                                <label htmlFor="firstName" className={styles.label}>FIRST NAME</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className={styles.input}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required // Обязательное поле
                                    aria-required="true"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="lastName" className={styles.label}>LAST NAME</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className={styles.input}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    // Не обязательное поле
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="companyEmail" className={styles.label}>COMPANY EMAIL</label>
                            <input
                                type="email"
                                id="companyEmail"
                                name="companyEmail"
                                className={styles.input}
                                value={formData.companyEmail}
                                onChange={handleChange}
                                required // Обязательное поле
                                aria-required="true"
                            />
                        </div>

                        {/* --- НОВОЕ ПОЛЕ ДЛЯ НОМЕРА ТЕЛЕФОНА --- */}
                        <div className={styles.formGroup}>
                            <label htmlFor="phoneNumber" className={styles.label}>PHONE NUMBER</label>
                            <input
                                type="tel" // Используем type="tel" для семантики
                                id="phoneNumber"
                                name="phoneNumber" // Должно совпадать с ключом в state
                                className={styles.input}
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                // Сделайте поле обязательным, если нужно, добавив required и aria-required="true"
                                // required
                                // aria-required="true"
                            />
                        </div>
                        {/* --- КОНЕЦ НОВОГО ПОЛЯ --- */}

                        <div className={styles.formGroup}>
                            <label htmlFor="mediaBudget" className={styles.label}>MONTHLY MEDIA BUDGET</label>
                            <select
                                id="mediaBudget"
                                name="mediaBudget"
                                className={styles.select}
                                value={formData.mediaBudget}
                                onChange={handleChange}
                                // Не обязательное поле
                            >
                                <option value="">Please Select</option>
                                <option value="$1000 - $5000">$1000 - $5000</option>
                                <option value="$5000 - $20000">$5000 - $20000</option>
                                <option value="$20000 - $50000">$20000 - $50000</option>
                                <option value="$50000+">$50000+</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>YOUR MESSAGE</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className={styles.textarea}
                                value={formData.message}
                                onChange={handleChange}
                                required // Обязательное поле
                                aria-required="true"
                            ></textarea>
                        </div>

                        <div class="formGroup checkboxGroup">
                         <label class="checkboxLabel">
                          <input type="checkbox" name="sms_consent" required>
                          I agree to receive SMS updates and notifications from Viks Production. Message and data rates may apply.
                         </label>
                        </div>

                        <div className={styles.recaptchaNotice}>
                            {/* ... (reCAPTCHA notice) ... */}
                            This site is protected by reCAPTCHA and the Google <a href="privacy">Privacy Policy</a> and <a
                            href="terms">Terms of Service</a> apply.
                        </div>

                        {/* Отображение статуса отправки (сообщения на английском) */}
                        {submitStatus.message && (
                            <p role="alert" // Добавляем роль для доступности
                               style={{
                                   color: submitStatus.success === true ? 'green' : (submitStatus.success === false ? 'red' : 'black'),
                                   marginTop: '1rem',
                                   textAlign: 'center', // Выравнивание по центру
                                   fontSize: '0.9rem',
                                   fontWeight: 'bold' // Делаем текст жирным для лучшей читаемости
                               }}>
                                {submitStatus.message}
                            </p>
                        )}

                        {/* Кнопка отправки (текст на английском) */}
                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isSubmitting} // Кнопка неактивна во время отправки
                            aria-busy={isSubmitting} // Атрибут доступности для состояния загрузки
                        >
                            {isSubmitting ? 'Submitting...' : 'SUBMIT YOUR MESSAGE'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
