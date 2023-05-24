import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MDBContainer } from 'mdbreact';
import axios from 'axios';

import { MDBRow, MDBCol } from 'mdbreact';

import 'mdbreact/dist/css/mdb.css';

//  function activateLasers() {

//   axios.get(`http://10.106.24.229/tuoicay`).then(res => {
//     const devices = res.data;
//     this.setState({devices});

//   })
//   .catch(error => console.log(error));


//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     //`current` points to the mounted text input element 

//     inputEl.current.focus();
//   };
//   componentDidMount(); {
//     axios.get(`http://192.168.2.21:2002/getAllsolieu`)
//       .then(res => {
//         const devices = res.data;
//         this.setState({devices});

//       })
//       .catch(error => console.log(error));
//   }

//   return (
//     <>
//       //<input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Focus the input</button>
//     </>
//   );
// } 
//  function activateLasers1() {


//   axios.get(`http://10.106.24.229/ngung`).then(res => {
//     const devices = res.data;
//     this.setState({devices});

//   })
//   .catch(error => console.log(error));

//   componentDidMount() {
//     axios.get(`http://192.168.2.21:2002/getAllsolieu`)
//       .then(res => {
//         const devices = res.data;
//         this.setState({devices});

//       })
//       .catch(error => console.log(error));
//   }

// //   return (
// //     <>
// //       //<input ref={inputEl} type="text" />
// //       <button onClick={onButtonClick}>Focus the input</button>
// //     </>
// //   );
//  } 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      devices: [],
    };
  }


  componentDidMount() {
    axios.get(`http://192.168.2.60:2002/getAllsolieu`)

      .then(res => {
        const devices = res.data;
        this.setState({ devices });

      })
      .catch(error => console.log(error));

  }
  v1() {
    axios.get(`http://10.106.25.30/ngung`).then(res => {

      // const devices = res.data;
      // this.setState({devices});
      console.log("Ban vừa tắt tưới cây", res.data);
    })
  }
  // v1(){
  //   fetch("http://192.168.1.44/ngung")
  // .then((response) => response.json())
  // .then((data) => console.log(data));
  //   axios.get(`http://192.168.1.44/ngung`,{headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',
  //   }}).then(res => {



  // })
  // }
  v2() {
    axios.get(`http://10.106.25.30/tuoicay`).then(res => {
      // const devices = res.data;
      // this.setState({devices});
      console.log("Bạn đang tưới cây nhé", res.data);
    })
  }
  v3() {
    axios.get(`http://10.106.25.30/docdata`).then(res => {
      // const devices = res.data;
      // this.setState({devices});
      console.log("Dulieu", res.data);
    })
  }
  v4() {
    axios.get(`http://10.106.25.30/tuoitudong`).then(res => {
      // const devices = res.data;
      // this.setState({devices});
      console.log("Bạn đang kích hoạt trạng thái tưới cây dựa trên độ ẩm đất", res.data);
    })
  }
  render() {

    return (<div className="App">
      {
        <div className="container-sd">
          <div id="header">
            <ul className="menu">
              <nav className="navbar navbar-expand-md bg-body-tertiary justify-content-center">

                <a className="navbar-brand" href="#">
                  <img src={`${process.env.PUBLIC_URL}/Logo_1.jpg`} alt="Avatar Logo" className="rounded-circle" width="75px" height="75px" />
                </a>

                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-heart"
                    viewBox="0 0 16 16">
                    <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z" />
                    <path
                      d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                  </svg>
                  <a href="../html/About-us.html">Homepage</a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="../html/ListGarden.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    List Garden
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="../html/Garden1.html"> Garden 1</a></li>
                    <li><a className="dropdown-item" href="../html/Garden2.html"> Garden 2</a></li>

                  </ul>
                </li>
                <li><a href="Post-2.html">Post 2</a></li>


                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About us
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"> House 1</a></li>
                    <li><a className="dropdown-item" href="#"> House 2</a></li>
                    <li><a className="dropdown-item" href="#"> House 3</a></li>
                  </ul>
                </li>
                <button className="btn btn-primary" type="submit">Contact Us</button>
              </nav>


            </ul>

          </div>

        </div>
      }

      <div className="d-flex justify-content-center">
        <h1 style={{ color: "red" }}>Hệ Thống Quản Lý Tưới Nước Cây Xanh</h1>
      </div>
      {/* <div> */}


      <MDBContainer className="bg-body-tertiary" >

        <MDBRow className="mx-md-n5">
          <MDBCol size="4" className="py-3 px-md-5 col-sm-12 col-md-4">
            <Card border="primary" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require(`../src/images/G9.jpg`)} />

              <Card.Body>
                <Card.Title>Số liệu ngày 15/2/2023</Card.Title>
                {/* {this.state.devices.map((device) => (<li key={device.id}>
        id: {device.id}, name: {device.namedevice}
      </li>
      ))} */}

                <Card.Text>
                  Đã tưới đủ nước, cây phát triển khoẻ mạnh.
                </Card.Text>
              </Card.Body>
            </Card>
          </MDBCol>
          <MDBCol size="4" className="py-3 px-md-5 col-sm-12 col-md-4">

            <Card border="success" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('../src/images/G5.jpg')} />
              <Card.Body>
                <Card.Title>Số liệu ngày 20/02/2023</Card.Title>
                <Card.Text>
                  {this.state.devices.map((device) => (<li key={device.id}>
        id: {device.id}, name: {device.namedevice}, humid: {device.humid}
      </li>
      ))}
                  Cây bị thiếu nước. Bạn cần chăm sóc chúng cẩn thận hơn nhé.
                </Card.Text>
              </Card.Body>
            </Card>
          </MDBCol>
          <MDBCol size="4" className="py-3 px-md-5 col-sm-12 col-md-4">
            <Card border="primary" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('../src/images/G7.jpg')} />
              <Card.Body>
                <Card.Title>Số liệu ngày 28/2/2023</Card.Title>
                {/* {this.state.devices.map((device) => (<li key={device.id}>
        id: {device.id}, name: {device.namedevice},
      </li>
      ))} */}
                <Card.Text>
                  Bạn đã làm rất tốt.
                </Card.Text>
              </Card.Body>
            </Card>
          </MDBCol>
        </MDBRow>


      </MDBContainer>

      <MDBContainer>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={require('../src/images/G6.jpg')} className="d-block w-70 p-3 mx-auto" alt="..." height="300px" width="500px" />
            </div>
            <div className="carousel-item">
              <img src={require('../src/images/G7.jpg')} className="d-block w-100 p-3" alt="..." height="300px" width="500px" />
            </div>
            <div className="carousel-item">
              <img src={require('../src/images/G7.jpg')} className="d-block w-100 p-3" alt="..." height="300px" width="500px" />
            </div>
          </div>


          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </MDBContainer>
      <MDBContainer>
        <div className="mx-4">
          <h2> Hãy yêu thương chúng tớ hằng ngày nhé!!!</h2>
        </div>

        <MDBRow>
          <MDBCol size="4" className="py-5 mx-auto px-md-5 px-lg-5 col-sm-12 col-lg-6 col-md-6 col-xl-6">

            <Card border="success" style={{ width: '18rem' }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Tưới nước</Card.Title>
                <Card.Text>
                  Đối với chức năng này, rất đơn giản để bạn sử dụng. Hãy bấm nút "ON" nếu bạn muốn tưới nước cho cây. và Nút "OFF" để tắt tưới nước cho cây nhé
                  <MDBRow>
                    <MDBCol size="6">
                      <div>

                        <Button variant="primary" onClick={this.v2}>
                          On
                        </Button>
                      </div>
                    </MDBCol>
                    <MDBCol size="6">
                      <div>
                        <Button onClick={this.v1}>
                          Off
                        </Button>
                      </div>
                    </MDBCol>

                  </MDBRow>

                </Card.Text>
              </Card.Body>
            </Card>
          </MDBCol>
          <MDBCol size="4" className=" py-3 px-md-5 px-lg-5 col-sm-12 col-lg-6 col-md-6 col-xl-6">

            <Card border="success" style={{ width: '18rem' }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Tưới nước tự động</Card.Title>
                <Card.Text>
                  Đối với chức năng tưới cây tự động, hệ thống sẽ hoạt động dựa vào độ ẩm của đất để tưới nước cho cây. Nếu độ ẩm của đất nhỏ hơn 1500,
                   thì khi bấm nút "Tưới cây tự động" hệ thống sẽ tự động kích hoạt máy bơm nước. 
                  <MDBRow>

                    <MDBCol>
                      <div>
                        <Button onClick={this.v4}>
                          Nhấn chọn tớ nhe
                        </Button>
                      </div>
                    </MDBCol>

                  </MDBRow>

                </Card.Text>
              </Card.Body>
            </Card>
          </MDBCol>



        </MDBRow>



      </MDBContainer>
      {/* <MDBContainer>
      <div className="container">
    <div id="footer">

      <div className="row py-5 px-5">
        <div className="col-sm-12 col-md-6 p-3">
          <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="justify-content-around py-5 px-5 ">
              <a className="navbar-brand" href="#">
                <img src="../Images/Germany-3.jfif" alt="Avatar Logo" style="width:75px;height: 75px;"
                  className="rounded-circle"/>
              </a>
            </div>

            <ul className="justify-content-around mx-auto">
              <div className="font-weight-bold; display-1;">
                <li><a href="Home.html className=" className="font-weight-bold">Homepage</a></li>
                <li><a href="#" className="font-weight-bold"> About us</a></li>
                <li><a href="#" className="font-weight-bold"> List garden</a></li>
              </div>
            </ul>


          </nav>
        </div>
        <div className="col-sm-12 col-md-6 p-3 py-5 px-5">
          <div className="mx-auto">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
              height="100px"/>
          </div>


          <label for="exampleFormControlTextarea1" className="form-label">Comment</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Comment"></textarea>

        </div>


      </div>

    </div>

  </div>
      </MDBContainer> */}

      {/* onclick={activateLasers()} */}





      {/* </div> */}





      {/* <div classNameName="container">
    <div id="footer">

      <div className="row py-5 px-5">
        <div classNameName="col-sm-12 col-md-6 p-3">
          <nav classNameName="navbar navbar-expand-md bg-body-tertiary">
            <div classNameName="justify-content-around py-5 px-5 ">
              <a classNameName="navbar-brand" href="#">
                <img src="../Images/Germany-3.jfif" alt="Avatar Logo" style="width:75px;height: 75px;"
                  classNameName="rounded-circle"/>
              </a>
            </div>

            <ul classNameName="justify-content-around mx-auto">
              <div classNameName="font-weight-bold; display-1;">
                <li><a href="Home.html classNameName=" classNameName="font-weight-bold">Homepage</a></li>
                <li><a href="#" classNameName="font-weight-bold"> About us</a></li>
                <li><a href="#" classNameName="font-weight-bold"> List garden</a></li>
              </div>
            </ul>


          </nav>
        </div>
        <div classNameName="col-sm-12 col-md-6 p-3 py-5 px-5">
          <div classNameName="mx-auto">
            <label for="exampleFormControlInput1" classNameName="form-label">Email address</label>
            <input type="email" classNameName="form-control" id="exampleFormControlInput1" placeholder="name@example.com"height="100px"/>
          </div>


          <label for="exampleFormControlTextarea1" classNameName="form-label">Comment</label>
          <textarea classNameName="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Comment"></textarea>

        </div>


      </div>

    </div>

  </div> */}


    </div>

    );

  }
}


export default App;