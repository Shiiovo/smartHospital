import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '快速上手',
    Svg: require('@site/static/img/医疗诊断.svg').default,
    description: (
      <>
        简单的可视化页面搭建，快速完成数据的展示。
      </>
    ),
  },
  {
    title: '精确服务',
    Svg: require('@site/static/img/医疗设备.svg').default,
    description: (
      <>
        基于大数据开发的智慧医疗系统，提供精准的医疗服务。
      </>
    ),
  },
  {
    title: '海量数据',
    Svg: require('@site/static/img/医疗工具.svg').default,
    description: (
      <>
        百万条数据的支持，提供海量的数据支持。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
