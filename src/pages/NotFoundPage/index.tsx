import { StyledNotFoundPage } from './style'
import catImage from "../../assets/cat-image.jpg"
import { StyledContainer } from '../../styles/grid'
import { StyledTitle } from '../../styles/typography'
import { StyledButtonLink } from '../../styles/button'

export const NotFoundPage = () => (
  <StyledNotFoundPage>
    <StyledContainer containerWidth={526} className='pageContainer'>
      <section>
        <div className='titleContainer'>
          <StyledTitle
            tag='h1'
            $fontSize='one'
          >
            404 - Page Not Found
          </StyledTitle>
          <StyledTitle
            tag='h2'
            $fontSize='two'
          >
            The requested page was not found!
          </StyledTitle>
        </div>
        <img src={catImage} alt='Imagem de um gato' />
        <StyledButtonLink
          to='/login'
          $buttonSize='default'
          $buttonStyle='blue'
          title='Acessar a página de Login'
          aria-label='Acessar a página de Login'
        >
          Voltar para a página de Login
        </StyledButtonLink>
      </section>
    </StyledContainer>
  </StyledNotFoundPage>
)
