import React from 'react'
import Photo from './Photo'

function ContentWrapper() {

    return (
        <div className="ContentWrapper" style={{'backgroundColor': 'white'}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac sollicitudin lorem. Sed porta placerat felis, sit amet commodo justo ultricies quis. Morbi pretium massa quam, id tincidunt orci scelerisque ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut eleifend, nisi sit amet faucibus aliquet, quam sem feugiat ante, sit amet dignissim orci est at risus. Sed tincidunt, lorem eget laoreet egestas, felis nisi tristique arcu, sed suscipit diam risus auctor arcu. Cras sit amet nunc tellus. Duis aliquet convallis lectus, ut pulvinar tellus ultrices id. Sed eu malesuada augue. Nullam auctor eget sem eu vestibulum. Morbi sit amet maximus tellus.</p>

            <p>Vestibulum elementum risus justo, et porttitor nunc efficitur sit amet. Nunc eget dui vel nulla maximus vestibulum. Mauris sit amet vestibulum nunc. Sed consectetur nunc arcu, vel facilisis lacus laoreet vitae. Aliquam nec fringilla est. Aliquam finibus eget tortor placerat cursus. Ut lacus lorem, venenatis pulvinar facilisis ut, varius viverra justo. Sed ut libero dui.</p>
            
            <Photo />

            <p>Sed justo ligula, dapibus ac nunc hendrerit, cursus porttitor urna. Integer aliquet augue in rutrum consequat. Nulla facilisi. Donec ullamcorper suscipit placerat. Integer vel dui eros. Cras placerat ipsum justo, sit amet porttitor ex molestie id. Proin et malesuada lorem, sit amet tincidunt odio.</p>

            <p>Etiam a diam imperdiet, malesuada mi eu, vestibulum erat. Cras bibendum nec lectus vitae vestibulum. Vestibulum eros quam, tempor non rutrum ac, tempor mattis eros. Nulla nec laoreet leo. Vestibulum ut bibendum erat. Integer id quam tincidunt, congue ex ac, dictum lectus. Nam euismod ipsum in erat vulputate ullamcorper. Nam id egestas magna. Mauris eu erat vitae tortor luctus placerat ac eget justo. Donec tristique, sem sit amet imperdiet interdum, felis ligula sollicitudin justo, ac placerat magna est eu nulla. Mauris eu nunc ac libero feugiat consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

            <p>Maecenas id ex in nibh venenatis elementum posuere ut risus. Ut fringilla lectus ultricies, pulvinar orci sit amet, hendrerit justo. Donec quis consequat quam. Nulla et tincidunt tortor. Duis sit amet sem vel sapien posuere ultricies. Praesent nunc orci, rhoncus sit amet varius et, tempor non lacus. Cras at fringilla elit, a aliquam ante. Curabitur hendrerit pretium suscipit. Cras lacinia mauris a blandit dapibus.</p>
            <div className="buffer"></div>
        </div>
    )
}

export default ContentWrapper
