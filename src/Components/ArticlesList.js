import React, { Component } from "react";
import axios from "axios";

class ArticlesList extends Component {
  state = {
    articles: []
  };

  render() {
    return (
      <main className="infobox">
        <h1>Hi there!</h1>
        {/* <ul>
          {this.getArticles().map(article => {
            return console.log("Hello");
            return <ArticleCard article={article} />;
          })}
        </ul> */}
      </main>
    );
    // return (
    // <main className="infobox">
    //   <StudentNumbers
    //     handleTotalClick={this.handleTotalClick}
    //     handleGraduatedClick={this.handleGraduatedClick}
    //     handleCurrentClick={this.handleCurrentClick}
    //     total={this.state.total}
    //     current={this.state.current}
    //     graduated={this.state.graduated}
    //   />
    // <ul>
    //   {this.filterStudentsStyle(this.state.students).map(student => {
    //     return <StudentCard student={student} />;
    //   })}
    // </ul>
    // </main>
    // )
  }

  componentDidMount = () => {
    // calls the fetch function then sets state using the data received
    this.getArticles().then(articles => {
      this.setState({
        articles,
        total: articles.length
      });
    });
  };

  getArticles = () => {
    return axios // makes a fetch request to the api - this can be done with any address depending on the information we wish to be returned
      .get("https://mattsncnewsproject.herokuapp.com/api/articles")
      .then(({ data }) => {
        return data.articles;
      });
  };
}

export default ArticlesList;

// import React from "react";
// import axios from "axios";
// import StudentCard from "./StudentCard";
// import StudentNumbers from "./StudentNumbers";

// class StudentList extends React.Component {
//   state = {
//     students: [],
//     total: 0,
//     current: 0,
//     graduated: 0,
//     filterStudents: "sorted"
//   };
//   render() {
//     return (
//       <main className="infobox">
//         <StudentNumbers
//           handleTotalClick={this.handleTotalClick}
//           handleGraduatedClick={this.handleGraduatedClick}
//           handleCurrentClick={this.handleCurrentClick}
//           total={this.state.total}
//           current={this.state.current}
//           graduated={this.state.graduated}
//         />
//         <ul>
//           {this.filterStudentsStyle(this.state.students).map(student => {
//             return <StudentCard student={student} />;
//           })}
//         </ul>
//       </main>
//     );
// }

// handleCurrentClick = () => {
//   this.setState({ filterStudents: "current" });
// };

// handleTotalClick = () => {
//   this.setState({ filterStudents: "sorted" });
// };

// handleGraduatedClick = () => {
//   this.setState({ filterStudents: "graduated" });
// };
// componentDidMount = () => {
//   // calls the fetch function then sets state using the data received
//   this.getStudents().then(students => {
//     this.setState({
//       students,
//       total: students.length,
//       graduated: this.graduatedStudents(students).length,
//       current: this.currentStudents(students).length
//     });
//   });
// };
// the following three functions should be put in a utils helper file as they are pure functions unrelated to the data
// sortedStudents = students => {
//   if (students.length !== 0) {
//     let sortedArray = students
//       .slice()
//       .sort((a, b) => a.startingCohort - b.startingCohort)
//       .reverse();
//     return sortedArray;
//   } else return students;
// };

// graduatedStudents = students => {
//   if (students.length !== 0) {
//     return students.filter(student => student.currentBlock === "graduated");
//   } else return students;
// };

// currentStudents = students => {
//   if (students.length !== 0) {
//     return students.filter(student => student.currentBlock !== "graduated");
//   } else return students;
// };

// filterStudentsStyle = students => {
//   if (this.state.filterStudents === "current")
//     return this.currentStudents(students);
//   else if (this.state.filterStudents === "graduated")
//     return this.graduatedStudents(students);
//   else return this.sortedStudents(students);
// };

// this function could be called as a callback after any add/remove function has been applied
// getStudents = () => {
//   return axios // makes a fetch request to the api - this can be done with any address depending on the information we wish to be returned
//     .get("https://nc-student-tracker.herokuapp.com/api/students")
//     .then(({ data }) => {
//       return data.students;
//     });
// };
