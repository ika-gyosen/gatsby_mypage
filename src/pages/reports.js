import React from "react";
import { Link } from "gatsby";
import Layout from "../components/header";

export default class ReportsPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <h2>レポートのページ</h2>
        </div>
        <ul>
          <li>
            <Link to={`/f446clock/`}>STM32446のクロック設定 メモ</Link>
          </li>
        </ul>
      </Layout>
    );
  }
}
