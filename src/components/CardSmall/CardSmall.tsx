import { CardSmallProps } from './CardSmall.props';
import styles from './CardSmall.module.scss';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

export const CardSmall = ({ text, sayWeather, type, className, ...props }: CardSmallProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles.cardData, className, {
      [styles.btn]: type === 'button',
    })} {...props}>
      { type !== 'button'
      ?
        <dl>
          <dd className={cn(styles.description, {
            [styles.flex]: type === 'feels',
          })}>
            <span className={styles.text}>{text}</span>
            {t(`response.${type}.value`)}
          </dd>
          <dt className={styles.termin}>{t(`response.${type}.name`)}</dt>
        </dl>
      :
        <button onClick={sayWeather} className={styles.button}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 28 28"><path fill="currentColor" fillRule="evenodd" d="M13.9252 4c.0661 0 .1467-.0001.2221.0054.9884.073 1.7743.859 1.8473 1.8474.0055.0753.0055.1559.0054.222v15.8504a3.0604 3.0604 0 0 1-.0054.2221c-.073.9884-.8589 1.7743-1.8473 1.8473-.0754.0056-.156.0055-.2221.0054h-.0321c-.0635 0-.1195 0-.1752-.002a3.0002 3.0002 0 0 1-1.9312-.7999c-.0409-.038-.0804-.0776-.1254-.1225L6.5858 18H5.3639c-.389 0-.7392.0001-1.0305-.0237-.312-.0255-.6435-.0832-.9684-.2488a2.4995 2.4995 0 0 1-1.0925-1.0925c-.1656-.3249-.2233-.6564-.2487-.9683C2 15.3754 2 15.0252 2 14.6362v-1.2723c0-.389 0-.7392.0238-1.0305.0254-.312.0831-.6435.2487-.9684a2.5 2.5 0 0 1 1.0925-1.0925c.325-.1655.6564-.2232.9684-.2487C4.6247 10 4.9748 10 5.3639 10h1.2219l5.0756-5.0755a4.7765 4.7765 0 0 1 .1253-.1225 3 3 0 0 1 1.9312-.8C13.7737 4 13.8295 4 13.8931 4h.0321Zm.0707 2.0003A7.9248 7.9248 0 0 0 13.9062 6c-.0838 0-.1005.0002-.1146.0007a.9997.9997 0 0 0-.6437.2667 3.5835 3.5835 0 0 0-.0815.0805L7.754 11.6603l-.0009.0008a1.525 1.525 0 0 1-.0529.051 1.099 1.099 0 0 1-.6919.2865c-.0329.0015-.0657.0014-.0732.0014H5.4c-.4365 0-.7038.0008-.9038.0171-.0931.0076-.1495.0172-.1837.0253a.307.307 0 0 0-.0317.0089c-.0052.0019-.0078.0032-.0078.0032a.5002.5002 0 0 0-.2185.2185s-.0013.0026-.0032.0078a.297.297 0 0 0-.009.0317c-.008.0342-.0176.0906-.0252.1838C4.0008 12.6962 4 12.9635 4 13.4v1.2c0 .4366.0008.7038.0171.9038.0076.0931.0172.1495.0252.1837a.297.297 0 0 0 .009.0317.0764.0764 0 0 0 .0032.0078.4997.4997 0 0 0 .2185.2185s.0026.0013.0078.0032a.3263.3263 0 0 0 .0317.009c.0342.008.0906.0176.1837.0252.2.0163.4673.0171.9038.0171h1.535c.0074 0 .0403-.0001.0734.0014a1.104 1.104 0 0 1 .207.029c.1122.027.2195.0714.318.1317.0774.0475.1337.0957.1668.1259.0244.0223.0477.0456.0529.0509l.0009.0009 5.3124 5.3124c.0592.0592.0711.0709.0815.0805a.9994.9994 0 0 0 .6437.2666c.0141.0006.0308.0007.1146.0007.0461 0 .0713 0 .0897-.0002l.0038-.0001v-.0038C14 21.9775 14 21.9523 14 21.9062V6.0939c0-.0461 0-.0713-.0003-.0898v-.0038h-.0038Z M18.7198 10.2519c.3454-.431.9748-.5002 1.4057-.1548C21.2665 11.0118 22 12.4206 22 14c0 1.5795-.7335 2.9883-1.8745 3.903-.4309.3454-1.0603.2761-1.4057-.1548-.3454-.4309-.2762-1.0603.1548-1.4057C19.5625 15.791 20 14.947 20 14c0-.9469-.4375-1.791-1.1254-2.3424-.431-.3454-.5002-.9748-.1548-1.4057Z M22.9533 7.2503c-.4141-.3655-1.0461-.326-1.4115.088-.3655.414-.3261 1.046.088 1.4115 1.4549 1.2841 2.3701 3.1596 2.3701 5.2502 0 2.0906-.9152 3.9662-2.3701 5.2503-.4141.3654-.4535.9974-.088 1.4114.3654.4141.9974.4535 1.4115.0881C24.82 19.1021 25.9999 16.6882 25.9999 14c0-2.6882-1.1799-5.102-3.0466-6.7497Z" /></svg>
        </button>
      }
    </div>
  );
};