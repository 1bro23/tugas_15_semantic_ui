import 'semantic-ui-css/semantic.min.css';
import {
  Table,
  Menu,
  Icon,
  Grid,
  Label,
  Search,
  Feed,
  Comment,
  Header,
  Form,
  Button
} from 'semantic-ui-react';

function App() {
  return (
    <Grid textAlign='center'>
      <Grid.Row >
        <Grid.Column width={11}>
          <br/>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign='right' colSpan='2'>
                    <Menu.Item>
                      <Search placeholder='Search document...'/>
                    </Menu.Item>
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>
                  Nama Document
                </Table.HeaderCell>
                <Table.HeaderCell>
                  Jenis File
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  PDF
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  Panduan Belajar CSS
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  PDF
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  Panduan Belajar React JS
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  PDF
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='2'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left'/>
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right'/>
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={4}>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column textAlign='left'>
          <Comment.Group threaded>
            <Header dividing>Commentar</Header>
            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
              <Comment.Content>
                <Comment.Author as='a'>Satria</Comment.Author>
                <Comment.Metadata><span>Today at 5:42PM</span></Comment.Metadata>
                <Comment.Text>Hallo..!</Comment.Text>
                <Comment.Actions><Comment.Action>Reply</Comment.Action></Comment.Actions>
              </Comment.Content>
            </Comment>
            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>
              <Comment.Content>
                <Comment.Author as='a'>Danang</Comment.Author>
                <Comment.Metadata><span>Today at 5:50PM</span></Comment.Metadata>
                <Comment.Text>Kerjakan Sesuatu Semampu Kamu..</Comment.Text>
                <Comment.Actions><Comment.Action>Reply</Comment.Action></Comment.Actions>
              </Comment.Content>
              <Comment.Group>
                <Comment>
                  <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg'/>
                  <Comment.Content>
                    <Comment.Author as='a'>Ricky</Comment.Author>
                    <Comment.Metadata>Just Now</Comment.Metadata>
                    <Comment.Text>Kamu Sekarang Dimana Danang?</Comment.Text>
                    <Comment.Actions><Comment.Action>Reply</Comment.Action></Comment.Actions>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
            </Comment>
            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg'/>
              <Comment.Content>
                <Comment.Author as='a'>Joe</Comment.Author>
                <Comment.Metadata>1 days ago</Comment.Metadata>
                <Comment.Text>Terimakasih Atas Nasihat Nya</Comment.Text>
                <Comment.Actions><Comment.Action>Reply</Comment.Action></Comment.Actions>
              </Comment.Content>
            </Comment>
            <Form reply>
              <Form.TextArea/>
              <Button primary contentPosition='right' content='Add Reply' icon='edit'/>
            </Form>
          </Comment.Group>
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={5}>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User>Anton</Feed.User> added you as a friend<Feed.Date>3 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                  <Feed.Like><Icon name='like'/>4 Likes</Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
            <Feed.Event>
              <Feed.Label>
                <Icon name='pencil'/>
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  You submitted a new post to the page <br/><Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                  <Feed.Extra text>
                    Saya Senang Belajar Bahasa Pemrograman
                  </Feed.Extra>
                  <Feed.Like>
                    11 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
            <Feed.Event>
              <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg'/>
              <Feed.Content>
                <Feed.Summary>
                  <Feed.Date>4 days ago</Feed.Date><br/>
                  David added 2 new Image
                </Feed.Summary>
                <Feed.Meta>
                  <Feed.Extra images>
                    <a><img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png'/></a>
                    <a><img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png'/></a>
                  </Feed.Extra>
                  <Feed.Like>
                    <Icon name='like'/>2 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
