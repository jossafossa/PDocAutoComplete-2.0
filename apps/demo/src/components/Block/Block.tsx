import type { PropsWithChildren } from "react";
import styles from "./Block.module.css";

type BlockProps = {
  title: string;
};

export const Block = ({ title, children }: PropsWithChildren<BlockProps>) => {
  return (
    <article className={styles.block}>
      <header>
        <h2>{title}</h2>
      </header>
      <section>{children}</section>
    </article>
  );
};
