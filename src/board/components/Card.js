import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {CardHeader, CardRightContent, CardTitle, Detail, Footer, MovableCardWrapper} from '../styles/Base'
import Tag from './Tag'
import DeleteButton from './widgets/DeleteButton'
import classNames from 'classnames'

class Card extends Component {

  highlightPrereqs = () => {
    const prereqs = this.props.prereqs; 
    const coreqs = this.props.coreqs;
    
    if(prereqs !== undefined) {
      prereqs.forEach((course) => {
        var prereq = document.querySelector(`[data-id="${course}"]`);
        if(window.mouseDown === 0) {
          prereq.classList.add('outlined-pre');
        }
        // console.log(document.querySelector(`[data-id="${course}"]`).classList);
      });
    }
    if (coreqs !== undefined) {
      // console.log(coreqs);
      coreqs.forEach((course) => {
        var coreq = document.querySelector(`[data-id="${course}"]`);
        // console.log(coreq.classList);
        if (window.mouseDown === 0 && coreq !== null) {
          coreq.classList.add('outlined-co');
        }
        // console.log(document.querySelector(`[data-id="${course}"]`).classList);
      });
    }
    // console.log(data);
  }

  unhighlightPrereqs = () => {
    var cards = document.querySelectorAll('.react-trello-card');
    cards.forEach((card) => {
      if(card.classList.contains('outlined-pre')) {
        card.classList.remove('outlined-pre');
      }
      if (card.classList.contains('outlined-co')) {
        card.classList.remove('outlined-co');
      }
    });

    // const data = this.props.prereqs;
    // if (data !== undefined) {
    //   data.forEach((course) => {
    //     var prereq = document.querySelector(`[data-id="${course}"]`);
    //     prereq.classList.add('outlined');
    //     // console.log(document.querySelector(`[data-id="${course}"]`).classList);
    //   });
    // }
    // // console.log(data);
  }

  removeCard = e => {
    const {id, laneId, removeCard, onDelete} = this.props
    removeCard(laneId, id)
    onDelete(id, laneId)
    e.stopPropagation()
  }

  renderBody = () => {
    if (this.props.customCardLayout) {
      const {customCard, ...otherProps} = this.props
      return React.cloneElement(customCard, {...otherProps})
    } else {
      const {title, description, label, tags} = this.props
      return (
        <span>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardRightContent>{label}</CardRightContent>
          </CardHeader>
          <Detail>{description}</Detail>
          {tags && (
            <Footer>
              {tags.map(tag => (
                <Tag key={tag.title} {...tag} tagStyle={this.props.tagStyle} />
              ))}
            </Footer>
          )}
        </span>
      )
    }
  }

  render() {
    const {id, prereqs, coreqs, coursetype, cardStyle, editable, hideCardDeleteIcon, customCardLayout, dragStyle, onDelete, ...otherProps} = this.props
    const style = customCardLayout ? {...cardStyle, padding: 0} : cardStyle
    const allClassNames = classNames('react-trello-card', this.props.className || '')
    return (
      <MovableCardWrapper
        onMouseEnter={this.highlightPrereqs}
        onMouseLeave={this.unhighlightPrereqs}
        className={allClassNames}
        key={id}
        data-id={id}
        data-prereqs={prereqs}
        data-coreqs={coreqs}
        data-coursetype={coursetype}
        style={{
          ...style,
          ...dragStyle
        }}
        {...otherProps}>
        {this.renderBody()}
        {editable && !hideCardDeleteIcon && <DeleteButton onClick={this.removeCard} />}
      </MovableCardWrapper>
    )
  }
}

Card.defaultProps = {
  cardStyle: {},
  customCardLayout: false,
  onDelete: () => {},
  editable: false,
  dragStyle: {}
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  prereqs: PropTypes.array,
  coreqs: PropTypes.array,
  coursetype: PropTypes.string,
  title: PropTypes.string,
  index: PropTypes.number,
  description: PropTypes.string,
  label: PropTypes.string,
  tags: PropTypes.array,
  laneId: PropTypes.string.isRequired,
  removeCard: PropTypes.func,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  metadata: PropTypes.object,
  cardStyle: PropTypes.object,
  dragStyle: PropTypes.object,
  tagStyle: PropTypes.object,
  customCardLayout: PropTypes.bool,
  customCard: PropTypes.node,
  editable: PropTypes.bool
}

export default Card
