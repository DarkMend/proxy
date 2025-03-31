import Title from "@/src/components/ui/Title/Title";
import styles from "./ScopeSection.module.scss";
import ScopeCard from "@/src/components/ScopeCard/ScopeCard";
import { scopes } from "./data";

export default function ScopeSection() {
  return (
    <section className={styles.scope}>
      <Title>Сфера применения</Title>
      <div className={styles.grids}>
        <div className={styles.gridStart}>
          <div className={styles.gridBlock}>
            {scopes.slice(0, 4).map((item, i) => (
              <ScopeCard
                text={item.text}
                iconText={item.icon}
                key={item.icon.title}
              />
            ))}
          </div>
          <div className={styles.gridOnce}>
            {scopes[4] && (
              <ScopeCard
                text={scopes[4].text}
                iconText={scopes[4].icon}
                key={scopes[4].icon.title}
                ul={scopes[4].ul}
                img={scopes[4].img}
                column={true}
              />
            )}
          </div>
        </div>
        <div className={styles.gridEnd}>
          {scopes[5] && (
            <ScopeCard
              text={scopes[5].text}
              iconText={scopes[5].icon}
              key={scopes[5].icon.title}
              img={scopes[5].img}
              className={styles.block6}
            />
          )}
        </div>
      </div>
    </section>
  );
}
