
import './infoPage.scss';
import { InfoLink } from '../../components/InfoLink';
import { informationAboutInstitution, materialSupport, onlineLearning, opennessInstitution, regulations } from '../../utils/constants';
import { useState } from 'react';
import { InfoButton } from '../../components/InfoButton';
import { InfoText } from '../../components/InfoText';
import { structure } from '../../utils/images';
import { eduactionalProgram20222023, improvingQualification, schoolWorkPlan2022023 } from '../../utils/files';

export const InfoPage = () => {
  const [showDetails, setShowDetails] = useState(0);
  const [showInfo, setShowInfo] = useState('');

  return (
    <section className='info'>
      <div className="container">

        <ul className="info__list">
          <li className='info__item'>
            <h2 className='info__title'>{regulations.title}</h2>

            <InfoButton 
              showDetails={showDetails}
              onShowDetails={setShowDetails}
              detailId={regulations.detailId}
            />
  
            {showDetails === regulations.detailId &&
              <div className="info__details">
                  {regulations.items.map(item => (
                    <InfoLink
                      key={item.id}
                      link={item.link}
                      title={item.title}
                    />
                  ))}
              </div>
            }
          </li>

          <li className='info__item'>
            <h2 className='info__title'>{informationAboutInstitution.title}</h2>

            <InfoButton 
              showDetails={showDetails}
              onShowDetails={setShowDetails}
              detailId={informationAboutInstitution.detailId}
            />
  
            {showDetails === informationAboutInstitution.detailId &&
              <div className="info__details">
                  {informationAboutInstitution.items.map(item => (
                    <InfoLink
                      key={item.id}
                      link={item.link}
                      title={item.title}
                    />
                  ))}

                  <InfoText
                    showInfo={showInfo}
                    onShowInfo={setShowInfo}
                    infoTitle={'Структура та органи управління закладом'}
                  >
                    <img src={structure} />
                  </InfoText>

                  <InfoText
                    showInfo={showInfo}
                    onShowInfo={setShowInfo}
                    infoTitle={'Правила поведінки здобувача освіти в закладі освіти'}
                  >
                    <code>
                      <h3 style={{ textAlign: 'center'}}>Загальні правила поведінки учнів у школі</h3>
                      <br />

                      <br />1. Правила поведінки учнів у школі базуються на законах України, постановах Міністерства освіти і науки України та органів місцевого самоврядування, Статуті школи.
                      <br />2.  У випадку порушень Правил до учнів можуть бути вжиті такі стягнення:
                      <br />- усне зауваження;
                      <br />- запис зауваження в щоденник;
                      <br />- винесення догани, включно із занесенням догани в особисту справу учня;
                      <br />- виклик учня самого або з батьками на педагогічну нараду;
                      <br />- відшкодування завданої учнем шкоди його батьками.
                      <br />3. Заборонено приносити до школи предмети або речовини, які можуть зашкодити здоров’ю та безпеці оточуючих або завадити проведенню навчального процесу.
                      <br />4. Паління, вживання алкогольних напоїв та нецензурних висловів на території школи категорично заборонено.
                      <br />5. До закінчення уроків учень може залишити територію школи тільки з дозволу класного керівника   або чергового адміністратора.
                      <br />6. Учень має бути ввічливим у спілкуванні з учителями, працівниками школи, батьками інших учнів, а також з учнями.
                      <br />7. Учні повинні дбайливо ставитися до шкільного майна і речей, що належать вчителям та іншим учням. Забороняється брати без дозволу чужі речі. За пошкоджене шкільне майно батьки учня зобов’язані відшкодувати збитки.

                      <br />
                      <br />
                      <h3>Правила поведінки під час перерви</h3>

                      <br />8. Під час перерви учень зобов’язаний прибрати своє робоче місце й підготуватися до наступного уроку.
                      <br />9. Під час перерви забороняється:
                      <br />- бігати сходами, коридорами та в класних приміщеннях, кататися на перилах;
                      <br />- штовхатися або грати у м’яча у приміщеннях не пристосованих для цього;
                      <br />- сваритися між собою та зі сторонніми людьми, з’ясовувати стосунки за допомогою сили, битися.
                      <br />10. У шкільній їдальні учні повинні виконувати вимоги працівників їдальні, вчителів, чергових  та дотримуватися черги.
                      <br />11.  Забороняється перебувати у приміщенні їдальні у верхньому одязі.
                      <br />12.  Не можна бешкетувати та виносити їжу і напої за межі їдальні.

                      <br />
                      <br />
                      <h3>Правила поведінки на уроках</h3>

                      <br />13. Учні зобов’язані приходити до школи за 10-15 хвилин до початку занять.
                      <br />14. Заборонено перебувати у класних приміщеннях у верхньому одязі.
                      <br />15. Одяг учнів має бути чистим і охайним та відповідати вимогам, викладеним у Статуті школи.
                      <br />16. Учні входять до класу за дзвоником. Запізнюватися на уроки без поважних причин заборонено.
                      <br />17. Під час уроку не можна створювати галас, без дозволу підводитися, відвертати увагу інших учнів від уроку.
                      <br />18. Заборонено виходити з класу без дозволу вчителя.
                      <br />19. Урок закінчується тоді, коли вчитель оголосив про це. Тільки після цього учні можуть йти на перерву.
                      <br />20. Учні повинні охайно вести щоденник і давати його вчителю без будь-яких заперечень.
                      <br />21. Під час уроку не можна вживати їжу та напої, жувати жуйку.
                      <br />22. Учень повинен дбайливо ставитися до підручників та зошитів.
                      <br />23. Учні зобов’язані знати і дотримуватися правил техніки безпеки як під час уроків так і після їх закінчення.
                      <br />24. Забороняється користуватися мобільними телефонами під час проведення уроків.
                    </code>
                  </InfoText>

                  <InfoText
                    showInfo={showInfo}
                    onShowInfo={setShowInfo}
                    infoTitle={'Умови прийому здобувачів освіти до першого класу'}
                  >
                    <code>
                      Шановні батьки першокласників 2022-2023 навчального року!
                      <br />
                      <br />
                      Дирекція Довгівської СЗОШ І-ІІ ступенів інформує Вас, що прийом документів, необхідних для зарахування до першого класу  буде триватиз 30 квітня по 31 травня 2022 року.
                      <br />
                      <br />Документи, необхідні для зарахування:
                      <br />- заява одного з батьків (або законних представників) про прийом дитини до школи на ім&apos;я директора школи. Таку заяву можна завантажити та роздрукувати за посиланням <a href="https://drive.google.com/file/d/1Qqwxfz8kmF7MWfFJATouKVpDlu_xyRIp/view?usp=sharing">https://drive.google.com/file/d/1Qqwxfz8kmF7MWfFJATouKVpDlu_xyRIp/view?usp=sharing</a>
                      <br />- копія свідоцтва про народження дитини;
                      <br />- медична довідка встановленого зразка (форма 086-1/о &#34;Довідка учня загальноосвітнього навчального закладу про результати обов&apos;язкового медичного профілактичного огляду&#34;).
                      <br />- Зарахування дитини з особливими освітніми потребами в інклюзивний або спеціальний клас проводиться на підставі висновку про комплексну психолого-педагогічну оцінку розвитку дитини або виписки з протоколу засідання психолого-медико-педагогічної консультації.
                      <br />
                      <br />З метою запобігання поширення випадків гострої респіраторної хвороби, спричиненої коронавірусом  COVID-19 повідомляємо, що документи та їх копії  щодо зарахування до школи  можна подавати в електронному вигляді (фотографії чи сканкопії) на скриньку <a href="mailto:48624@ukr.net">48624@ukr.net</a>  з поміткою «Першокласник 2022».
                    </code>
                  </InfoText>
              </div>
            }
          </li>

          <li className='info__item'>
            <h2 className='info__title'>{opennessInstitution.title}</h2>

            <InfoButton 
              showDetails={showDetails}
              onShowDetails={setShowDetails}
              detailId={opennessInstitution.detailId}
            />
  
            {showDetails === opennessInstitution.detailId &&
              <div className="info__details">
                  {opennessInstitution.items.map(item => (
                    <InfoLink
                      key={item.id}
                      link={item.link}
                      title={item.title}
                    />
                  ))}

                  <InfoText
                    showInfo={showInfo}
                    onShowInfo={setShowInfo}
                    infoTitle={'Критерії оцінювання'}
                  >
                    <code>
                      <InfoLink
                        link={'https://drive.google.com/file/d/1DuEdJ31mq4-gyMoszi89TOwfu8q_-PRM/view'}
                        title={'Наказ МОН від 13.07.2021 №813.Методичні рекомендації що до оцінювання результатів навчання учнів 1-4 класів закладів загальної середньої'}
                      />
                      За рішенням педагогічної ради школи ( протокол №1 від 31.08.2022 р.) результат оцінювання особистісних надбань учнів 3-4 класів виражати рівневою оцінкою.
                  </code>
                  </InfoText>

                  <InfoText
                    showInfo={showInfo}
                    onShowInfo={setShowInfo}
                    infoTitle={'Освітня програма'}
                  >
                    <InfoLink 
                      link={eduactionalProgram20222023}
                      title={'2022-2023 навчальний рік'}
                    />
                  </InfoText>

                  <InfoText
                    showInfo={showInfo}
                    onShowInfo={setShowInfo}
                    infoTitle={'Підвищення кваліфікації педпрацівників'}
                  >
                    <InfoLink 
                      link={improvingQualification}
                      title={'2022-2023 навчальний рік'}
                    />
                  </InfoText>

                  <InfoText
                    showInfo={showInfo}
                    onShowInfo={setShowInfo}
                    infoTitle={'План роботи школи'}
                  >
                    <InfoLink 
                      link={schoolWorkPlan2022023}
                      title={'2022-2023 навчальний рік'}
                    />
                  </InfoText>

                  <InfoText
                    showInfo={showInfo}
                    onShowInfo={setShowInfo}
                    infoTitle={'Інформаційні системи'}
                  >
                    <code>
                      Початкова школа з ДВ с. Довге використовує комп&#39;ютерну програму «КУРС: Школа» для закладів загальної середньої освіти та «КУРС: Сайт» для автоматизації передачі даних на WEB-портали верхнього рівня. Дозволяє автоматизувати і якісно керувати навчальними процесами.
                      Генерує обов&#39;язкові форми звітності ЗНЗ-1 і 83-РВК, затверджені наказом № 766 МОНМС України від 02.07.2012 року, форму статистичної звітності 77-РВК, затверджену наказом Держкомстату № 317 від 06.08.2010 року і пересилає їх електронні версії згідно підпорядкованості.
                      Допомагає встановити навантаження вчителям. Складає розклад занять як в ручному, так і в автоматичному режимі. Програма «КУРС: Школа» може працювати в двох режимах: з доступом і без доступу до мережі Інтернет. Адреса сайту підтримки: www.ekyrs.org
                      Портал ІСУО- інформаційна система управління освітою. Приймає і консолідує дані із закладів загальної середньої освіти, генерує обов&#39;язкові форми звітності ЗНЗ-1 та 83-РВК і пересилає їх електронні версії згідно підпорядкованості. Дозволяє здійснювати пошук інформації. Має надійні алгоритми захисту інформації від несанкціонованого використання. Склад і функціонал може доповнюватися і нарощуватися в залежності від завдань і потреб. Школа працює у науково - педагогічному проекті- Електронна атестація педагогічних працівників. Адреса в мережі Інтернет: www.isuo.org
                      Школа працює в шкільній освітній мережі «Електронний щоденник» , що дозволяє вчителям виставляти оцінки і вести облік відвідуваності в класних журналах, опубліковувати домашні завдання як для всього класу, так і персонально для кожного учня. Зручно спілкуватися та обмінюватися інформацією всім учасникам освітнього процесу. Батьки завжди мають можливість слідкувати за тим, що відбувається в школі. Існує можливість архівувати дані, аналізувати відвідуваність і успішність як вчителям, так і батькам. Дозволяє робити висновки та різні статистичні вибірки.
                    </code>
                  </InfoText>
              </div>
            }
          </li>

          <li className='info__item'>
            <h2 className='info__title'>{materialSupport.title}</h2>

            <InfoButton 
              showDetails={showDetails}
              onShowDetails={setShowDetails}
              detailId={materialSupport.detailId}
            />
  
            {showDetails === materialSupport.detailId &&
              <div className="info__details">
                  {materialSupport.items.map(item => (
                    <InfoLink
                      key={item.id}
                      link={item.link}
                      title={item.title}
                    />
                  ))}
              </div>
            }
          </li>

          <li className='info__item'>
            <h2 className='info__title'>{onlineLearning.title}</h2>

            <InfoButton 
              showDetails={showDetails}
              onShowDetails={setShowDetails}
              detailId={onlineLearning.detailId}
            />
  
            {showDetails === onlineLearning.detailId &&
              <div className="info__details">
                  {onlineLearning.items.map(item => (
                    <InfoLink
                      key={item.id}
                      link={item.link}
                      title={item.title}
                    />
                  ))}
              </div>
            }
          </li>
        </ul>
      </div>
    </section>
  );
};
