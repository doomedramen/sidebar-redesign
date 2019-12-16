import React from 'react';
import './App.css';
import Accordion from './Accordion'
import AccordionChild from './AccordionChild'


function App() {
  return (
    <div className="App">

      <div className="sidebar">
        <div className="container">

          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <div className="icon is-padded is-black"><i className="fas fa-align-left fa-1x"></i></div>
              </div>
              <div className="level-item ml-2">
                <div className="is-flex-column">
                  <div className="has-text-black">Ernst Ventures</div>
                  <div>Niclas Ernst</div>
                </div>
              </div>
            </div>

            <div className="level-right">
              <div className="level-item">
                <i className="far fa-caret-square-left"></i>
              </div>
            </div>
          </div>


          <div className="control">
            <input type="text" placeholder="Jump to" className="search-box" />

            <span className="is-left"><i className="fas fa-search"></i></span>

            <span className="is-right">
              <div className="tag">⌘K</div>
            </span>
          </div>


          <div className="ml-1 mr-1">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <i className="fas fa-bolt" />
                </div>
                <div className="level-item">
                  <div className="ml-2">Activity</div>
                </div>
              </div>

              <div className="level-right">
                <div className="level-item">
                  <div className="tag is-rounded is-red">12</div>
                  <div><div className="tag">⌘1</div></div>
                </div>
              </div>

            </div>
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <i className="fas fa-list" />
                </div>
                <div className="level-item">
                  <div className="ml-2">Overview</div>
                </div>
              </div>

              <div className="level-right">
                <div className="level-item">
                  <div><div className="tag">⌘2</div></div>
                </div>
              </div>
            </div>
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <i className="far fa-user" />
                </div>
                <div className="level-item">
                  <div className="ml-2">Contacts</div>
                </div>
              </div>

              <div className="level-right">
                <div className="level-item">
                  <div><div className="tag">⌘3</div></div>
                </div>
              </div>
            </div>
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <i className="far fa-check-square" />
                </div>
                <div className="level-item">
                  <div className="ml-2">Tasks</div>
                </div>
              </div>

              <div className="level-right">
                <div className="level-item">
                  <div className="tag is-rounded is-red">99+</div>
                  <div><div className="tag">⌘4</div></div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="divider" />

        <div className="container">

          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <div className="has-text-black">Investment Team</div>
              </div>
            </div>

            <div className="level-right">
              <div className="level-item">
                <div><i className="fas fa-plus-square"></i></div>
              </div>
            </div>
          </div>

          <Accordion toggler={
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <div className="icon is-green">
                    <i className="far fa-file"></i>
                  </div>
                </div>
                <div className="level-item ml-1">
                  Deal Flow
                  </div>
              </div>
            </div>
          }>

            <AccordionChild>
              <div className="level">
                <div className="level-left">
                  <div className="level-item ml-1">
                    <div className="icon is-red">
                      <i className="fas fa-sort-amount-up"></i>
                    </div>
                  </div>
                  <div className="level-item ml-1">
                    Pipeline
                  </div>
                </div>
              </div>
            </AccordionChild>

            <AccordionChild>
              <div className="level">
                <div className="level-left">
                  <div className="level-item ml-1">
                    <div className="icon is-green">
                      <i className="far fa-file"></i>
                    </div>
                  </div>
                  <div className="level-item ml-1">
                    Untitled
                  </div>
                </div>
              </div>
            </AccordionChild>

            <AccordionChild>
              <div className="level">
                <div className="level-left">
                  <div className="level-item ml-1">
                    <div className="icon is-purple">
                      <i className="fas fa-calendar-day"></i>
                    </div>
                  </div>
                  <div className="level-item ml-1">
                    Pitch Schedule
                  </div>
                </div>
              </div>
            </AccordionChild>

          </Accordion>

          <Accordion toggler={
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <div className="icon is-black">
                    <i className="far fa-file"></i>
                  </div>
                </div>
                <div className="level-item ml-1">
                  Portfolio
                  </div>
              </div>
            </div>
          }>

          </Accordion>

        </div>
      </div>

    </div >
  );
}

export default App;
